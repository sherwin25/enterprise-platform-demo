import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <header className="space-y-4 border-b border-neutral-800 pb-8">
          <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium tracking-wider uppercase">
            <span>Infrastructure Engineering</span>
            <span>•</span>
            <span>Kubernetes Governance</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            Automated Multi-Tenant Platform
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl">
            Designing a scalable, secure, and compliant Kubernetes environment using Terraform and Infrastructure-as-Code principles.
          </p>
          <div className="flex gap-4 pt-4">
            <Link href="https://github.com/sherwin/enterprise-platform-demo" className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-neutral-200 transition">
              View Source Code
            </Link>
          </div>
        </header>

        {/* The Problem & Solution */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">The Challenge</h2>
            <p className="text-neutral-400 leading-relaxed">
              In large enterprises, giving developers unrestricted access to Kubernetes clusters leads to "noisy neighbor" problems, security vulnerabilities, and budget overruns. Manual namespace creation is slow and error-prone.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">The Solution</h2>
            <p className="text-neutral-400 leading-relaxed">
              I implemented a "Namespace-as-a-Service" module using Terraform. This automates the provisioning of isolated tenant environments with strict Resource Quotas and RBAC controls baked in by default.
            </p>
          </div>
        </section>

        {/* Business Impact / ELI5 Section */}
        <section className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-indigo-500/20 p-2 rounded-lg">
              <span className="text-indigo-400 text-xl">💡</span>
            </div>
            <h3 className="text-xl font-semibold text-white">Why This Matters (The Business Context)</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-medium text-cyan-400 text-sm uppercase tracking-wide">The Analogy</h4>
              <p className="text-neutral-300 leading-relaxed">
                Think of **Kubernetes** as a giant apartment building for software. 
                Without rules, one noisy tenant (a bad app) could use all the electricity and water, leaving everyone else in the dark.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                **My Project** functions as the "Building Manager." It automatically assigns every new tenant a strict budget for electricity (CPU) and water (RAM) so the building never crashes.
              </p>
            </div>

            <div className="space-y-3 opacity-90">
              <h4 className="font-medium text-green-400 text-sm uppercase tracking-wide">The ROI</h4>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex gap-2">
                  <span className="text-green-500">✅</span>
                  <span><strong>Cost Control:</strong> Prevents cloud bills from spiking by stopping runaway processes.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">✅</span>
                  <span><strong>Security:</strong> The "Zero Trust" walls I built ensure that if one app gets hacked, the attacker is trapped in that room.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">✅</span>
                  <span><strong>Speed:</strong> Developers get their keys instantly via code, rather than waiting days for manual approval.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-6">
          <h3 className="text-xl font-semibold text-neutral-200">Technologies Used</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Terraform', desc: 'Infrastructure as Code' },
              { name: 'Kubernetes', desc: 'Container Orchestration' },
              { name: 'OpenShift', desc: 'Enterprise Platform' },
              { name: 'Podman', desc: 'Container Runtime' }
            ].map((tech) => (
              <div key={tech.name} className="p-4 border border-neutral-800 rounded bg-neutral-900/50">
                <div className="font-bold text-white">{tech.name}</div>
                <div className="text-sm text-neutral-500">{tech.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture Diagram */}
        <section className="p-8 border border-neutral-800 rounded bg-neutral-900/30 flex flex-col items-center justify-center space-y-8">
          <div className="w-full max-w-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
            
            {/* Diagram Container */}
            <div className="relative flex flex-col items-center space-y-8 w-full">
              
              {/* Terraform Node */}
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 bg-[#7B42BC]/20 border border-[#7B42BC] rounded-lg shadow-lg backdrop-blur-sm">
                  <span className="font-mono text-[#E4DBF1] font-bold text-xs uppercase tracking-wider">Terraform Module</span>
                </div>
                <div className="h-8 w-px bg-gradient-to-b from-[#7B42BC] to-neutral-700" />
              </div>

              {/* Cluster Box */}
              <div className="w-full p-6 border border-neutral-800 rounded-xl bg-neutral-900/50 relative">
                <div className="absolute -top-3 left-4 bg-neutral-900 px-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  OpenShift Cluster
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Tenant 1: Storefront */}
                  <div className="p-4 border border-green-900/40 bg-green-950/5 rounded-lg relative overflow-hidden">
                    <div className="font-mono text-green-400 mb-2 text-xs uppercase">storefront-public</div>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-[10px] text-green-300">Ingress: ALLOWED</span>
                    </div>
                    <div className="space-y-1">
                        <div className="h-1.5 w-full bg-neutral-800 rounded overflow-hidden"><div className="h-full bg-green-500/50 w-3/4" /></div>
                        <div className="text-[10px] text-neutral-500">Quota: 2 CPU</div>
                    </div>
                  </div>

                  {/* Tenant 2: Payments (SECURE) */}
                  <div className="p-4 border border-red-900/40 bg-red-950/5 rounded-lg relative overflow-hidden">
                    <div className="absolute top-2 right-2 text-red-500 font-bold text-[10px] border border-red-500/50 px-1 rounded bg-red-900/20">LOCKED</div>
                    <div className="font-mono text-red-400 mb-2 text-xs uppercase">payments-prod</div>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="h-2 w-2 bg-red-500 rounded-full" />
                        <span className="text-[10px] text-red-300">Ingress: DENIED</span>
                    </div>
                    <div className="space-y-1">
                        <div className="h-1.5 w-full bg-neutral-800 rounded overflow-hidden"><div className="h-full bg-red-500/50 w-1/4" /></div>
                        <div className="text-[10px] text-neutral-500">Quota: 4 CPU</div>
                    </div>
                  </div>

                  {/* Tenant 3: Data */}
                  <div className="p-4 border border-blue-900/40 bg-blue-950/5 rounded-lg relative overflow-hidden">
                    <div className="font-mono text-blue-400 mb-2 text-xs uppercase">data-science</div>
                    <div className="flex items-center gap-2 mb-3">
                        <div className="h-2 w-2 bg-blue-500 rounded-full" />
                        <span className="text-[10px] text-blue-300">Ingress: DENIED</span>
                    </div>
                    <div className="space-y-1">
                        <div className="h-1.5 w-full bg-neutral-800 rounded overflow-hidden"><div className="h-full bg-blue-500/50 w-1/12" /></div>
                        <div className="text-[10px] text-neutral-500">Quota: 8 CPU (High)</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl bg-black/20 p-6 rounded-lg border border-neutral-800">
            <div>
              <h4 className="text-white font-medium mb-3">How to Read This Diagram</h4>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 mt-1 shrink-0" />
                  <div>
                    <strong className="text-green-400 block mb-1">1. Storefront (Green)</strong>
                    <span>The <strong>Public Website</strong>. It needs to be "Open" so customers can visit it. It has standard resources.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 mt-1 shrink-0" />
                  <div>
                    <strong className="text-red-400 block mb-1">2. Payments (Red)</strong>
                    <span>The <strong>Secure Vault</strong>. It processes credit cards. It is "Locked" (Zero Trust) so hackers cannot reach it from the internet.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mt-1 shrink-0" />
                  <div>
                    <strong className="text-blue-400 block mb-1">3. Data Science (Blue)</strong>
                    <span>The <strong>AI Lab</strong>. It trains models. It needs massive power (High CPU/RAM) but lives in isolation to protect proprietary algorithms.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium mb-2">The "Magic" Happening Here</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Notice how the <strong>Terraform Module</strong> (top) spawns three completely different environments from the same code. 
                  Instead of manually configuring firewalls for every team, the module automatically applies the correct <strong>Security Policy</strong> based on the business need.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
