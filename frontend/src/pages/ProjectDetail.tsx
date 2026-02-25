// src/pages/ProjectDetail.tsx
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProjectDetail = () => {
    const { slug } = useParams();

    // Phase 2: This state will eventually be powered by a fetch() call to your laptop!
    const [isComputeNodeOnline, setIsComputeNodeOnline] = useState(false);

    // In a real app, you'd fetch this data from an array or database based on the 'slug'
    // For now, we just use a generic layout to show the UI
    const projectName = slug?.replace('-', ' ').toUpperCase() || "PROJECT DETAILS";

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Back Button */}
                <Link to="/" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors mb-8">
                    ← Back to Portfolio
                </Link>

                {/* Project Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                        {projectName}
                    </h1>

                    {/* Microservice Status Badge */}
                    <div className="flex items-center gap-3 mt-6">
                        <span className="text-sm font-medium text-gray-500">Edge Compute Node:</span>
                        {isComputeNodeOnline ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-200 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> RTX 4090 Online
                            </span>
                        ) : (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-xs font-bold border border-yellow-200 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-yellow-500"></span> Offline (Demo Mode)
                            </span>
                        )}
                    </div>
                </div>

                {/* The Demo Area */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 mb-12 min-h-[400px] flex flex-col justify-center items-center">
                    {isComputeNodeOnline ? (
                        <div className="text-center w-full">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Live Inference Terminal</h3>
                            <p className="text-gray-500 mb-6">Connected securely to local microservice.</p>
                            {/* This is where your live interactive form/upload will go */}
                            <div className="border border-dashed border-gray-300 rounded-xl p-12 bg-gray-50 text-gray-400 font-mono text-sm">
                                Awaiting input data for processing...
                            </div>
                        </div>
                    ) : (
                        <div className="text-center max-w-lg mx-auto">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Static Video Demo</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                My local high-performance compute node is currently asleep. Enjoy this recorded demonstration of the system in action.
                            </p>
                            {/* Put an actual video or image tag here later */}
                        </div>
                    )}
                </div>

                {/* Project Description text goes here */}
                <div className="prose prose-gray max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Architecture & Methodology</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Detailed explanation of the project, diagrams, and methodologies will be populated here.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetail;