export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          API Monitoring for Developers
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Get alerts when your{' '}
          <span className="text-[#58a6ff]">API costs spike</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Connect your Stripe, OpenAI, or AWS account. We learn your usage patterns and alert you the moment costs deviate — before your bill explodes.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start monitoring — $11/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { icon: '⚡', title: 'Real-time polling', desc: 'Checks your API usage every 15 minutes' },
          { icon: '🧠', title: 'Learned baselines', desc: 'Adapts to your normal spending patterns' },
          { icon: '🔔', title: 'Email & webhooks', desc: 'Alerts via email, Slack, or any webhook' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="text-white font-medium text-sm mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-xs">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border border-[#58a6ff]/40 rounded-xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$11</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Connect up to 10 API integrations',
              'Polling every 15 minutes',
              'Email + webhook alerts',
              'Anomaly detection with learned baselines',
              'Custom threshold rules',
              '90-day cost history',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which APIs do you support?',
              a: 'We support OpenAI, Stripe, AWS, and more. You connect via read-only API keys — we never write to your accounts.',
            },
            {
              q: 'How does anomaly detection work?',
              a: 'We build a rolling baseline from your last 30 days of usage. If a period deviates by more than your configured threshold (default 2×), you get an alert.',
            },
            {
              q: 'Can I set my own cost thresholds?',
              a: 'Yes. You can set hard dollar limits per integration or rely on the learned baseline. Both can trigger alerts independently.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-white font-medium mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        © {new Date().getFullYear()} API Cost Alerter. Built for developers who hate surprise bills.
      </footer>
    </main>
  )
}
