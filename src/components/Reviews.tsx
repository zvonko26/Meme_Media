import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Reviews = () => {
    const { t } = useTranslation();
    const [reviews, setReviews] = useState([
        { id: 1, author: 'Ana K.', role: 'Marketing Manager', text: 'Izvanredna usluga i profesionalnost. Preporučujem svima!' },
        { id: 2, author: 'Marko P.', role: 'CEO', text: 'Najbolja investicija za naš biznis. Rezultati su nevjerojatni.' },
        { id: 3, author: 'Ivan H.', role: 'Startup Founder', text: 'Kreativni tim koji stvarno razumije moderne trendove.' },
        { id: 4, author: 'Petra M.', role: 'Product Owner', text: 'Odlična komunikacija i pravovremena isporuka.' },
        { id: 5, author: 'Luka B.', role: 'Art Director', text: 'Vrhunski dizajn i tehnička izvedba.' },
    ]);

    const [newReview, setNewReview] = useState({
        text: '',
        author: '',
        role: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newReview.text && newReview.author && newReview.role) {
            setReviews(prev => [...prev, { ...newReview, id: prev.length + 1 }]);
            setNewReview({ text: '', author: '', role: '' });
        }
    };

    return (
        <section className="py-20 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">{t('reviews.title')}</h2>
                    <p className="text-xl text-white/70">{t('reviews.subtitle')}</p>
                </motion.div>

                {/* Reviews Container with Scroll */}
                <div className="mb-12">
                    <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                            {reviews.map((review) => (
                                <motion.div
                                    key={review.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-lg p-6 backdrop-blur-sm"
                                >
                                    <p className="text-white/90 mb-4">{review.text}</p>
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500" />
                                        <div className="ml-4">
                                            <div className="font-semibold text-white">{review.author}</div>
                                            <div className="text-white/70 text-sm">{review.role}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Add Review Form */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    onSubmit={handleSubmit}
                    className="max-w-2xl mx-auto space-y-4"
                >
                    <textarea
                        value={newReview.text}
                        onChange={(e) => setNewReview(prev => ({ ...prev, text: e.target.value }))}
                        placeholder="Vaša recenzija..."
                        className="w-full p-4 bg-white/5 border border-orange-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-500"
                        rows={4}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            value={newReview.author}
                            onChange={(e) => setNewReview(prev => ({ ...prev, author: e.target.value }))}
                            placeholder="Vaše ime"
                            className="p-4 bg-white/5 border border-orange-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-500"
                        />
                        <input
                            type="text"
                            value={newReview.role}
                            onChange={(e) => setNewReview(prev => ({ ...prev, role: e.target.value }))}
                            placeholder="Vaša pozicija"
                            className="p-4 bg-white/5 border border-orange-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200"
                    >
                        Postavi
                    </button>
                </motion.form>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-yellow-500/20 opacity-30" />
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
            </div>
        </section>
    );
};

export default Reviews; 