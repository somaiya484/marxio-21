"use client";
import { CheckCircle, Truck, Headphones, ShieldCheck } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
    return (
        <main>
            <Header />
            <div className="max-w-6xl mx-auto px-6 py-16">

                {/* Page Title */}
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
                    About <span className="text-orange-500">Marxio</span>
                </h1>

                {/* Company Overview */}
                <section className="my-32 text-gray-700">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
                    <p className="text-lg leading-relaxed">
                        Marxio is a one-stop destination for all your home and kitchen appliance needs. We provide a wide range of high-quality products that enhance convenience, efficiency, and comfort in everyday life. Whether you are looking for essential kitchen appliances or advanced home electronics, Marxio brings you the best selection at the most competitive prices.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                        Our catalog includes refrigerators, washing machines, microwaves, ovens, air conditioners, blenders, rice cookers, coffee makers, electric kettles, induction cooktops, gas stoves, air fryers, toasters, and much more. We carefully curate our products to ensure reliability, durability, and modern functionality. Our goal is to make high-quality appliances accessible to every household in Bangladesh.
                    </p>
                </section>

                {/* Mission & Vision */}
                <section className="mb-32">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission and Vision</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        At Marxio, we believe that a well-equipped home leads to a better quality of life. Our mission is to provide modern households with top-tier appliances that are both affordable and efficient. We aim to simplify daily tasks through innovative solutions, ensuring that every customer finds the perfect product for their needs.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                        Our vision is to become Bangladesh’s most trusted and customer-centric home appliance store. We are committed to delivering top-notch service, ensuring customer satisfaction, and continuously expanding our product offerings to meet evolving lifestyle demands.
                    </p>
                </section>

                {/* Why Choose Us */}
                <section className="mb-32">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Marxio?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4">
                            <CheckCircle className="text-orange-500 w-8 h-8" />
                            <div>
                                <h3 className="text-xl font-semibold">Extensive Product Range</h3>
                                <p className="text-gray-600">We offer an extensive collection of home and kitchen appliances, ensuring that you find everything you need under one roof.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Truck className="text-orange-500 w-8 h-8" />
                            <div>
                                <h3 className="text-xl font-semibold">Fast and Reliable Delivery</h3>
                                <p className="text-gray-600">We provide secure and timely deliveries across Bangladesh, ensuring that your orders reach you without any hassle.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Headphones className="text-orange-500 w-8 h-8" />
                            <div>
                                <h3 className="text-xl font-semibold">24/7 Customer Support</h3>
                                <p className="text-gray-600">Our dedicated support team is available at all times to assist you with any inquiries, product recommendations, or order-related concerns.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <ShieldCheck className="text-orange-500 w-8 h-8" />
                            <div>
                                <h3 className="text-xl font-semibold">Cash on Delivery</h3>
                                <p className="text-gray-600">Enjoy the convenience of paying only when your product arrives, ensuring a safe and reliable shopping experience.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Core Values */}
                <section className="mb-32">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 shadow-md rounded-lg">
                            <h3 className="text-xl font-semibold text-orange-500">Trust</h3>
                            <p className="text-gray-600">We prioritize honesty and transparency in all our interactions, ensuring a trustworthy shopping experience.</p>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded-lg">
                            <h3 className="text-xl font-semibold text-orange-500">Quality</h3>
                            <p className="text-gray-600">We provide durable and high-performing appliances from reputable brands, ensuring that our customers receive the best value.</p>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded-lg">
                            <h3 className="text-xl font-semibold text-orange-500">Affordability</h3>
                            <p className="text-gray-600">Our products are competitively priced to make modern appliances accessible to all households in Bangladesh.</p>
                        </div>
                    </div>
                </section>

                {/* Customer Commitment */}
                <section className="mb-32">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Commitment to Customers</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        At Marxio, we understand that purchasing home appliances is an important investment. That’s why we are committed to providing detailed product information, reliable after-sales support, and a seamless shopping experience. We continuously strive to improve our services and offer the latest innovations in home and kitchen appliances.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                        Whether you are setting up a new home or upgrading your existing appliances, Marxio is here to help you find the perfect products that meet your lifestyle needs.
                    </p>
                </section>

                {/* Call to Action */}
                <div className="text-center mt-32">
                    <h2 className="text-2xl font-semibold text-gray-800">Upgrade Your Home with Marxio</h2>
                    <p className="text-lg text-gray-600 mb-6">Browse our extensive collection of high-quality home and kitchen appliances today.</p>
                    <a href="/" className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
                        Shop Now
                    </a>
                </div>
            </div>

            <Footer />
        </main>
    );
}
