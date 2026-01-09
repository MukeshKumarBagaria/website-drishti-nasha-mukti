"use client";

import { useState } from "react";
import Link from "next/link";

export default function FreedomCalculator() {
    const [step, setStep] = useState(1);
    const [showConfetti, setShowConfetti] = useState(false);
    const [formData, setFormData] = useState({
        substance: "",
        dailySpend: 0,
        years: 0,
        impact: 5,
        name: "",
        whatsapp: "",
        email: ""
    });
    const [result, setResult] = useState<{
        savings1y: number;
        savings5y: number;
        savings10y: number;
        milestones: string[];
        level: string;
    } | null>(null);

    const substanceOptions = [
        { value: "alcohol", emoji: "🍺", label: "Alcohol" },
        { value: "smoking", emoji: "🚬", label: "Smoking" },
        { value: "drugs", emoji: "💊", label: "Drugs" },
        { value: "gambling", emoji: "🎰", label: "Gambling" }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const selectSubstance = (value: string) => {
        setFormData(prev => ({ ...prev, substance: value }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const calculatePreliminary = () => Number(formData.dailySpend) * 365 * 10;

    const getLevel = (savings10y: number) => {
        if (savings10y >= 5000000) return { name: "Legend 🏆", color: "#f59e0b" };
        if (savings10y >= 2000000) return { name: "Champion 🚀", color: "#8b5cf6" };
        if (savings10y >= 500000) return { name: "Warrior 🌟", color: "#10b981" };
        return { name: "Starter 🌱", color: "#3b82f6" };
    };

    const calculateFinal = () => {
        const daily = Number(formData.dailySpend);
        const savings1y = daily * 365;
        const milestones = formData.substance === 'smoking'
            ? ["20 min: Heart rate normalizes", "1 month: Lung function improves", "1 year: Heart disease risk halved"]
            : ["1 week: Better sleep & energy", "1 month: Liver/brain recovery starts", "1 year: Major health improvement"];

        setResult({ savings1y, savings5y: savings1y * 5, savings10y: savings1y * 10, milestones, level: getLevel(savings1y * 10).name });
        setShowConfetti(true);
        nextStep();
        setTimeout(() => setShowConfetti(false), 3000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        calculateFinal();
    };

    const formatCurrency = (amount: number) => {
        if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)} Cr`;
        if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)} L`;
        return `₹${amount.toLocaleString('en-IN')}`;
    };

    const stepTitles = ["", "What's Holding You Back?", "The Hidden Cost", "Years Lost", "Life Impact", "Unlock Your Future", "Your Freedom Report"];

    return (
        <main className="calc-page">
            {showConfetti && <div className="confetti-wrap">{[...Array(40)].map((_, i) => <div key={i} className="confetti-piece" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random()}s`, background: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'][i % 4] }}></div>)}</div>}

            <div className="calc-card">
                {/* Progress */}
                <div className="calc-progress">
                    <div className="calc-progress-bar" style={{ width: `${(step / 6) * 100}%` }}></div>
                </div>

                <div className="calc-header">
                    <span className="calc-step-num">Step {step} of 6</span>
                    <h1>{stepTitles[step]}</h1>
                </div>

                <div className="calc-body">
                    {/* Step 1: Substance */}
                    {step === 1 && (
                        <div className="calc-step fade-in">
                            <p className="calc-desc">Choose what you want to overcome. You've already taken the first step by being here! 💪</p>
                            <div className="substance-grid">
                                {substanceOptions.map(opt => (
                                    <button key={opt.value} onClick={() => selectSubstance(opt.value)} className={`substance-btn ${formData.substance === opt.value ? 'selected' : ''}`}>
                                        <span className="substance-emoji">{opt.emoji}</span>
                                        <span>{opt.label}</span>
                                    </button>
                                ))}
                            </div>
                            <button onClick={nextStep} disabled={!formData.substance} className="calc-next-btn">Let's Do This! →</button>
                        </div>
                    )}

                    {/* Step 2: Daily Spend */}
                    {step === 2 && (
                        <div className="calc-step fade-in">
                            <p className="calc-desc">Be honest – how much do you typically spend each day on {formData.substance}?</p>
                            <div className="input-wrap">
                                <span className="input-prefix">₹</span>
                                <input type="number" name="dailySpend" value={formData.dailySpend || ''} onChange={handleInputChange} placeholder="e.g. 300" autoFocus />
                            </div>
                            {formData.dailySpend > 0 && (
                                <div className="feedback-bubble animate-pop">
                                    <span>😱</span> That's <strong>{formatCurrency(Number(formData.dailySpend) * 30)}</strong> burning every month!
                                </div>
                            )}
                            <div className="btn-group">
                                <button onClick={prevStep} className="calc-back-btn">← Back</button>
                                <button onClick={nextStep} disabled={!formData.dailySpend} className="calc-next-btn">Continue →</button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Years */}
                    {step === 3 && (
                        <div className="calc-step fade-in">
                            <p className="calc-desc">For how many years has this been a part of your life?</p>
                            <div className="slider-display">{formData.years || 1} years</div>
                            <input type="range" name="years" min="1" max="30" value={formData.years || 1} onChange={handleInputChange} className="calc-slider" />
                            <div className="slider-labels"><span>1 yr</span><span>30 yrs</span></div>
                            {formData.years > 0 && (
                                <div className="feedback-bubble warning animate-pop">
                                    <span>💔</span> Already spent: <strong>{formatCurrency(Number(formData.dailySpend) * 365 * Number(formData.years))}</strong>
                                </div>
                            )}
                            <div className="btn-group">
                                <button onClick={prevStep} className="calc-back-btn">← Back</button>
                                <button onClick={nextStep} disabled={!formData.years} className="calc-next-btn">Continue →</button>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Impact */}
                    {step === 4 && (
                        <div className="calc-step fade-in">
                            <p className="calc-desc">How much does this affect your happiness, energy, and relationships?</p>
                            <div className="impact-visual">
                                <span className="impact-emoji">{formData.impact <= 3 ? '😊' : formData.impact <= 6 ? '😐' : formData.impact <= 8 ? '😟' : '😢'}</span>
                                <div className="impact-score">{formData.impact}/10</div>
                                <div className="impact-label">{formData.impact <= 3 ? "Low Impact" : formData.impact <= 6 ? "Moderate" : formData.impact <= 8 ? "High" : "Severe"}</div>
                            </div>
                            <input type="range" name="impact" min="1" max="10" value={formData.impact} onChange={handleInputChange} className="calc-slider" />
                            <div className="btn-group">
                                <button onClick={prevStep} className="calc-back-btn">← Back</button>
                                <button onClick={nextStep} className="calc-next-btn pulse">See My Results! 🎉</button>
                            </div>
                        </div>
                    )}

                    {/* Step 5: Lead Capture */}
                    {step === 5 && (
                        <div className="calc-step fade-in">
                            <div className="preview-card">
                                <div className="preview-badge">🎁 Your Report is Ready!</div>
                                <div className="preview-amount">{formatCurrency(calculatePreliminary())}</div>
                                <p>Potential 10-Year Savings</p>
                            </div>

                            <div className="pdf-offer">
                                <div className="pdf-icon">📘</div>
                                <div>
                                    <strong>FREE Recovery Guide PDF</strong>
                                    <p>Get our "21-Day De-Addiction Blueprint" with your personalized report. Trusted by 5,000+ families.</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="lead-form">
                                <input type="text" name="name" required placeholder="Your Name" value={formData.name} onChange={handleInputChange} />
                                <input type="tel" name="whatsapp" required placeholder="WhatsApp Number" value={formData.whatsapp} onChange={handleInputChange} />
                                <input type="email" name="email" placeholder="Email (for PDF)" value={formData.email} onChange={handleInputChange} />
                                <button type="submit" className="submit-btn">Get My Free Report + PDF 📩</button>
                            </form>
                            <p className="privacy-note">🔒 100% private. We never spam.</p>
                        </div>
                    )}

                    {/* Step 6: Results */}
                    {step === 6 && result && (
                        <div className="calc-step fade-in">
                            <div className="result-badge" style={{ background: getLevel(result.savings10y).color }}>{result.level}</div>
                            <h2>Congratulations, {formData.name}! 🎉</h2>
                            <p className="result-intro">Here's what your freedom looks like:</p>

                            <div className="savings-row">
                                <div className="savings-box">
                                    <span className="savings-label">1 Year</span>
                                    <span className="savings-val">{formatCurrency(result.savings1y)}</span>
                                    <span className="savings-icon">🎧</span>
                                </div>
                                <div className="savings-box big">
                                    <span className="savings-label">10 Years</span>
                                    <span className="savings-val">{formatCurrency(result.savings10y)}</span>
                                    <span className="savings-icon">🚗</span>
                                </div>
                            </div>

                            <div className="health-box">
                                <h3>❤️ Health Timeline</h3>
                                {result.milestones.map((m, i) => <p key={i}>✅ {m}</p>)}
                            </div>

                            <div className="final-cta">
                                <p>Your FREE "21-Day Blueprint" PDF has been sent to your WhatsApp! 📲</p>
                                <Link href="/contact" className="cta-primary">Book FREE Consultation</Link>
                                <button className="cta-share" onClick={() => window.open(`https://wa.me/?text=I%20can%20save%20${encodeURIComponent(formatCurrency(result.savings10y))}%20in%2010%20years!%20Try%20it%3A%20drishti-nasha-mukti.vercel.app/freedom-calculator`)}>Share with Family 💬</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                .calc-page { min-height: 100vh; padding: 100px 16px 40px; background: linear-gradient(135deg, #f0fdf4 0%, #ecfeff 100%); }
                .confetti-wrap { position: fixed; inset: 0; pointer-events: none; z-index: 100; }
                .confetti-piece { position: absolute; width: 10px; height: 10px; border-radius: 2px; animation: fall 2.5s linear forwards; }
                @keyframes fall { to { transform: translateY(100vh) rotate(720deg); opacity: 0; } }

                .calc-card { max-width: 480px; margin: 0 auto; background: white; border-radius: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.08); overflow: hidden; }
                .calc-progress { height: 6px; background: #e5e7eb; }
                .calc-progress-bar { height: 100%; background: linear-gradient(90deg, #10b981, #3b82f6); transition: width 0.3s; }
                .calc-header { padding: 24px 24px 0; text-align: center; }
                .calc-step-num { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: #10b981; font-weight: 600; }
                .calc-header h1 { font-size: 1.5rem; color: #1f2937; margin: 8px 0 0; }
                .calc-body { padding: 24px; }
                .calc-step { display: flex; flex-direction: column; gap: 20px; }
                .calc-desc { color: #6b7280; text-align: center; line-height: 1.6; }

                .substance-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
                .substance-btn { padding: 20px; border-radius: 16px; border: 2px solid #e5e7eb; background: #fafafa; display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer; transition: all 0.2s; }
                .substance-btn:hover { border-color: #10b981; background: #f0fdf4; }
                .substance-btn.selected { border-color: #10b981; background: #dcfce7; }
                .substance-emoji { font-size: 2rem; }

                .input-wrap { display: flex; align-items: center; border: 2px solid #e5e7eb; border-radius: 12px; overflow: hidden; background: #fafafa; }
                .input-wrap:focus-within { border-color: #10b981; }
                .input-prefix { padding: 0 16px; font-size: 1.25rem; color: #9ca3af; }
                .input-wrap input { flex: 1; border: none; outline: none; padding: 16px 16px 16px 0; font-size: 1.5rem; font-weight: 600; background: transparent; }

                .feedback-bubble { background: #dcfce7; border: 1px solid #86efac; padding: 12px 16px; border-radius: 12px; text-align: center; color: #166534; }
                .feedback-bubble.warning { background: #fef9c3; border-color: #fde047; color: #854d0e; }
                .feedback-bubble span { margin-right: 8px; }

                .slider-display { font-size: 2.5rem; font-weight: 700; text-align: center; color: #1f2937; }
                .calc-slider { width: 100%; height: 8px; -webkit-appearance: none; background: #e5e7eb; border-radius: 4px; }
                .calc-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 24px; height: 24px; background: #10b981; border-radius: 50%; cursor: pointer; }
                .slider-labels { display: flex; justify-content: space-between; font-size: 0.75rem; color: #9ca3af; }

                .impact-visual { text-align: center; padding: 16px 0; }
                .impact-emoji { font-size: 4rem; }
                .impact-score { font-size: 2rem; font-weight: 700; color: #1f2937; }
                .impact-label { color: #6b7280; margin-top: 4px; }

                .btn-group { display: flex; gap: 12px; }
                .calc-back-btn { flex: 1; padding: 14px; border-radius: 12px; border: 1px solid #e5e7eb; background: white; color: #6b7280; font-weight: 500; cursor: pointer; }
                .calc-next-btn { flex: 2; padding: 14px; border-radius: 12px; border: none; background: #10b981; color: white; font-weight: 600; cursor: pointer; transition: all 0.2s; }
                .calc-next-btn:disabled { opacity: 0.4; cursor: not-allowed; }
                .calc-next-btn:not(:disabled):hover { background: #059669; }
                .calc-next-btn.pulse { animation: pulse 1.5s infinite; }
                @keyframes pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); } 50% { box-shadow: 0 0 0 12px rgba(16, 185, 129, 0); } }

                .preview-card { background: linear-gradient(135deg, #10b981, #3b82f6); padding: 24px; border-radius: 16px; text-align: center; color: white; }
                .preview-badge { background: rgba(255,255,255,0.2); display: inline-block; padding: 6px 14px; border-radius: 20px; font-size: 0.875rem; margin-bottom: 12px; }
                .preview-amount { font-size: 2.5rem; font-weight: 800; }
                .preview-card p { margin: 8px 0 0; opacity: 0.9; }

                .pdf-offer { display: flex; gap: 16px; background: #fffbeb; border: 1px solid #fde68a; padding: 16px; border-radius: 12px; align-items: center; }
                .pdf-icon { font-size: 2.5rem; }
                .pdf-offer strong { color: #92400e; }
                .pdf-offer p { margin: 4px 0 0; font-size: 0.875rem; color: #78716c; }

                .lead-form { display: flex; flex-direction: column; gap: 12px; }
                .lead-form input { padding: 14px 16px; border-radius: 12px; border: 1px solid #e5e7eb; font-size: 1rem; outline: none; }
                .lead-form input:focus { border-color: #10b981; }
                .submit-btn { padding: 16px; border-radius: 12px; border: none; background: linear-gradient(90deg, #10b981, #059669); color: white; font-weight: 700; font-size: 1rem; cursor: pointer; }
                .privacy-note { text-align: center; font-size: 0.75rem; color: #9ca3af; margin-top: 8px; }

                .result-badge { display: inline-block; padding: 8px 18px; border-radius: 20px; color: white; font-weight: 700; margin-bottom: 12px; }
                .calc-step h2 { text-align: center; color: #1f2937; margin: 0; }
                .result-intro { text-align: center; color: #6b7280; }
                .savings-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
                .savings-box { background: #f3f4f6; padding: 16px; border-radius: 12px; text-align: center; }
                .savings-box.big { background: linear-gradient(135deg, #dcfce7, #d1fae5); border: 1px solid #86efac; }
                .savings-label { display: block; font-size: 0.75rem; color: #6b7280; text-transform: uppercase; }
                .savings-val { display: block; font-size: 1.5rem; font-weight: 700; color: #1f2937; margin: 4px 0; }
                .savings-icon { font-size: 1.25rem; }
                .health-box { background: #fef3c7; border-radius: 12px; padding: 16px; margin-top: 16px; }
                .health-box h3 { margin: 0 0 12px; font-size: 1rem; }
                .health-box p { margin: 8px 0; font-size: 0.875rem; color: #78716c; }

                .final-cta { background: #f0fdf4; border: 1px solid #86efac; padding: 20px; border-radius: 12px; text-align: center; margin-top: 16px; }
                .final-cta p { margin: 0 0 16px; color: #166534; font-weight: 500; }
                .cta-primary { display: block; background: #1f2937; color: white; padding: 14px; border-radius: 12px; text-decoration: none; font-weight: 600; margin-bottom: 10px; }
                .cta-share { width: 100%; padding: 12px; border-radius: 12px; border: 1px solid #e5e7eb; background: white; cursor: pointer; font-weight: 500; }

                .fade-in { animation: fadeIn 0.4s ease-out; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                .animate-pop { animation: pop 0.3s ease-out; }
                @keyframes pop { 0% { transform: scale(0.95); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
            `}</style>
        </main>
    );
}
