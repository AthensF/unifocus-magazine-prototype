import { useMemo, useState } from 'react';

type Campaign = {
  title: string;
  status: 'Live' | 'Coming Soon';
  description: string;
  date: string;
};

type ProjectCard = {
  title: string;
  description: string;
  status: 'Live' | 'Building' | 'Planning';
  accent: 'amber' | 'blue' | 'purple' | 'green';
  tags: string[];
};

type PostTemplate = {
  id: string;
  tone: string;
  title: string;
  body: string;
  recommended?: boolean;
};

type MagazineAsset = {
  label: string;
  badge: 'PRINT' | 'AI';
  scene: 'cover' | 'spread' | 'lobby' | 'suite' | 'column' | 'feature';
};

const campaigns: Campaign[] = [
  {
    title: 'UniFocus Magazine Ad Kit',
    status: 'Live',
    description: 'Amplify the UniFocus hospitality AI magazine campaign across LinkedIn.',
    date: 'May 7, 2026',
  },
  {
    title: 'Hotel Ops AI Launch Kit',
    status: 'Live',
    description: 'Share approved hotel operations messaging for workforce, scheduling, and service teams.',
    date: 'May 3, 2026',
  },
  {
    title: "How I AI — John's Episode",
    status: 'Coming Soon',
    description: 'A future employee advocacy kit for an upcoming hospitality AI episode.',
    date: 'Launching soon',
  },
];

const assets: MagazineAsset[] = [
  { label: 'Trade cover', badge: 'PRINT', scene: 'cover' },
  { label: 'Hotelier spread', badge: 'PRINT', scene: 'spread' },
  { label: 'Lobby feature', badge: 'PRINT', scene: 'lobby' },
  { label: 'Suite insert', badge: 'PRINT', scene: 'suite' },
  { label: 'Column ad', badge: 'AI', scene: 'column' },
  { label: 'Feature page', badge: 'AI', scene: 'feature' },
];

const sloganIdeas = [
  'Hotels Move Fast. Our AI Moves Faster.',
  'Smarter Shifts. Happier Guests.',
  'Forecast Demand Before It Hits the Lobby.',
];

const pastCampaigns = ['Hospitality Staffing Trends', 'Forecasting Playbook Drop', 'Operations AI Teaser', 'Guest Service Readiness 101'];

const projectCards: ProjectCard[] = [
  {
    title: 'Integrated Marketing Plan',
    description: 'Campaign calendar for podcast, direct mail, paid social, case study, and webinar motions.',
    status: 'Live',
    accent: 'amber',
    tags: ['calendar', 'campaigns', 'launch'],
  },
  {
    title: 'ABM Match-Rate Tool',
    description: 'Prioritise target accounts and align campaign coverage before activation.',
    status: 'Building',
    accent: 'blue',
    tags: ['ABM', 'accounts', 'signals'],
  },
  {
    title: 'Harper Inbound Agent Lab',
    description: 'Preview, test, and tune AI inbound agent behaviour before campaigns go live.',
    status: 'Live',
    accent: 'purple',
    tags: ['AI agent', 'QA', 'inbound'],
  },
  {
    title: 'Activation Assets',
    description: 'Launchable campaign-specific playbooks, ad scripts, and team enablement materials.',
    status: 'Planning',
    accent: 'green',
    tags: ['assets', 'playbooks', 'enablement'],
  },
];

function createPostTemplates(slogan: string): PostTemplate[] {
  return [
    {
      id: 'operator',
      tone: 'Operator-led',
      title: 'Hotel ops waits for no one.',
      body: `${slogan}\n\nHotels do not get to pause while teams catch up. Guests arrive, shifts change, rooms turn over, and service expectations keep climbing.\n\nThat is why UniFocus is putting AI to work where hospitality moves fastest.\n\n#HospitalityAI #HotelOperations #UniFocus`,
    },
    {
      id: 'spotted',
      tone: 'Spotted',
      title: 'Seen this campaign yet?',
      recommended: true,
      body: `Seen this campaign?\n\n“${slogan}”\n\nA practical reminder that hotel operations need technology that can keep up with the pace of the floor, the desk, and the guest.\n\nUniFocus helps hospitality teams move faster with smarter workforce and operations intelligence.\n\n#HospitalityTech #HotelAI #WorkforceManagement`,
    },
    {
      id: 'bold',
      tone: 'Bold',
      title: 'The pace of hospitality changed.',
      body: `${slogan}\n\nThe best hotel teams already move quickly. The opportunity now is giving them AI that moves with them — across labour planning, forecasting, service execution, and daily operational decisions.\n\nThat is the campaign. That is the point.\n\n#Hotels #HospitalityAI #UniFocus`,
    },
  ];
}

function App() {
  const [selectedAsset, setSelectedAsset] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState('spotted');
  const [headline, setHeadline] = useState('Hotels Move Fast. Our AI Moves Faster.');
  const [length, setLength] = useState(55);
  const [detail, setDetail] = useState(50);
  const [energy, setEnergy] = useState(68);
  const [customDirection, setCustomDirection] = useState('Make it confident, practical, and hospitality-operator led.');

  const postTemplates = useMemo(() => createPostTemplates(headline), [headline]);
  const selectedPost = useMemo(
    () => postTemplates.find((template) => template.id === selectedTemplate) ?? postTemplates[0],
    [postTemplates, selectedTemplate],
  );

  const generatedPost = useMemo(() => {
    const lengthLabel = length > 66 ? 'longer' : length < 34 ? 'short' : 'medium-length';
    const detailLabel = detail > 66 ? 'specific' : detail < 34 ? 'simple' : 'balanced';
    const energyLabel = energy > 66 ? 'upbeat' : energy < 34 ? 'calm' : 'confident';

    return `${headline}\n\nHere’s the ${lengthLabel}, ${detailLabel}, ${energyLabel} take: hospitality teams already move quickly. UniFocus helps hotel operators turn that pace into better forecasting, smarter staffing, and smoother guest service.\n\n${customDirection}\n\n#HospitalityAI #HotelOperations #UniFocus`;
  }, [customDirection, detail, energy, headline, length]);

  return (
    <main>
      <HeroShell />
      <GtmCommandCenter />
      <Buzzboard
        selectedAsset={selectedAsset}
        setSelectedAsset={setSelectedAsset}
        selectedPost={selectedPost}
        postTemplates={postTemplates}
        setSelectedTemplate={setSelectedTemplate}
        headline={headline}
        setHeadline={setHeadline}
        length={length}
        setLength={setLength}
        detail={detail}
        setDetail={setDetail}
        energy={energy}
        setEnergy={setEnergy}
        customDirection={customDirection}
        setCustomDirection={setCustomDirection}
        generatedPost={generatedPost}
      />
    </main>
  );
}

function HeroShell() {
  return (
    <section className="page-shell intro-shell">
      <nav className="top-nav glass-nav">
        <div className="brand-mark">✦ UniFocus</div>
        <a href="#gtm">GTM Growth</a>
        <a href="#buzzboard">Buzzboard</a>
        <a href="#campaign-kit">Campaign Kit</a>
        <a href="#scoreboard">Scoreboard</a>
      </nav>
      <div className="intro-grid">
        <div>
          <p className="eyebrow">Marketing Webpage Suite</p>
          <h1>Campaign systems that look as sharp as the work they ship.</h1>
          <p className="lede">A local prototype for the GTM Growth Command Center and Buzzboard employee amplification site, rebuilt around UniFocus magazine creative.</p>
        </div>
        <div className="mini-browser-card">
          <div className="browser-dots"><span /><span /><span /></div>
          <div className="mini-browser-line wide" />
          <div className="mini-browser-line" />
          <div className="mini-browser-tiles"><span /><span /><span /></div>
        </div>
      </div>
    </section>
  );
}

function GtmCommandCenter() {
  return (
    <section className="browser-frame" id="gtm">
      <nav className="top-nav product-nav">
        <div className="brand-mark">✦ UniFocus Growth</div>
        <a href="#calendar">Integrated Marketing Plan</a>
        <a href="#projects">Projects</a>
        <a href="#mini-tools">Mini Tools</a>
        <a href="#status">Status</a>
      </nav>

      <section className="gtm-hero">
        <div>
          <span className="soft-pill">AI Growth Projects</span>
          <h2>GTM Growth <span>Command Center.</span> 🚀</h2>
          <p>Experiments, ABM intelligence, and campaign activation infrastructure in one polished dashboard.</p>
        </div>
        <a className="black-button" href="#projects">Explore projects →</a>
      </section>

      <section className="calendar-section" id="calendar">
        <div className="section-heading inverted">
          <span>Featured</span>
          <div>
            <h3>Integrated Marketing Plan</h3>
            <p>The main project calendar tracking every integrated campaign across channels — podcast, direct mail, paid social, case study, and webinar.</p>
          </div>
          <button className="light-button">Open full plan ↗</button>
        </div>
        <MarketingTimeline />
      </section>

      <section className="projects-section" id="projects">
        <p className="eyebrow">All Projects</p>
        <div className="project-card-grid">
          {projectCards.map((card) => <ProjectCardView key={card.title} card={card} />)}
        </div>
      </section>

      <section className="activation-strip" id="status">
        <span>06</span>
        <div>
          <h3>Activation Campaigns</h3>
          <p>Campaign-specific playbooks, activation plans, and LinkedIn ad scripts tied to live GTM launches.</p>
        </div>
        <button className="black-button">View launch assets →</button>
      </section>
    </section>
  );
}

function MarketingTimeline() {
  const rows = [
    { name: 'AI Readiness 101', start: '8%', width: '28%', colour: 'slate' },
    { name: 'T&H Summer Campaigns', start: '25%', width: '68%', colour: 'blue' },
    { name: 'CX Network — Sponsored Webinar', start: '25%', width: '22%', colour: 'amber' },
    { name: 'State of CX Report', start: '15%', width: '51%', colour: 'purple' },
  ];

  return (
    <div className="timeline-card">
      <div className="timeline-toolbar">
        <strong>Integrated Marketing Plan</strong>
        <div><span>Calendar</span><span>List</span><span>Message Map</span><span>Email Calendar</span></div>
      </div>
      <div className="timeline-months"><span>Mar 2026</span><span>Apr 2026</span><span>May 2026</span><span>Jun 2026</span><span>Jul 2026</span></div>
      {rows.map((row) => (
        <div className="timeline-row" key={row.name}>
          <span>{row.name}</span>
          <div className="timeline-track"><i className={`timeline-bar ${row.colour}`} style={{ left: row.start, width: row.width }} /></div>
        </div>
      ))}
    </div>
  );
}

function ProjectCardView({ card }: { card: ProjectCard }) {
  return (
    <article className="project-card">
      <div className={`project-thumb ${card.accent}`}>
        <strong>{card.title.split(' ')[0]}</strong>
        <span className="mock-screen" />
      </div>
      <div className="card-body">
        <span className={`status-pill ${card.status.toLowerCase()}`}>● {card.status}</span>
        <h4>{card.title}</h4>
        <p>{card.description}</p>
        <div className="tag-row">{card.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
    </article>
  );
}

function Buzzboard({
  selectedAsset,
  setSelectedAsset,
  selectedPost,
  postTemplates,
  setSelectedTemplate,
  headline,
  setHeadline,
  length,
  setLength,
  detail,
  setDetail,
  energy,
  setEnergy,
  customDirection,
  setCustomDirection,
  generatedPost,
}: {
  selectedAsset: number;
  setSelectedAsset: (asset: number) => void;
  selectedPost: PostTemplate;
  postTemplates: PostTemplate[];
  setSelectedTemplate: (template: string) => void;
  headline: string;
  setHeadline: (value: string) => void;
  length: number;
  setLength: (value: number) => void;
  detail: number;
  setDetail: (value: number) => void;
  energy: number;
  setEnergy: (value: number) => void;
  customDirection: string;
  setCustomDirection: (value: string) => void;
  generatedPost: string;
}) {
  return (
    <section className="browser-frame buzzboard-frame" id="buzzboard">
      <nav className="top-nav product-nav buzz-nav">
        <div className="brand-mark">● Buzzboard</div>
        <a href="#live-campaigns">Live Campaigns</a>
        <a href="#past-campaigns">Past Campaigns</a>
        <a href="#scoreboard">Scoreboard</a>
      </nav>

      <section className="buzz-hero">
        <span className="soft-pill dark">BUZZBOARD</span>
        <h2>Grab a post and get loud<br />on <span>LinkedIn</span></h2>
        <div className="value-pills"><span>✓ Pick from curated campaigns</span><span>✓ AI-generated or ready-made posts</span><span>✓ Track your team's impact</span></div>
      </section>

      <section className="campaign-list" id="live-campaigns">
        <p className="eyebrow">Live Campaigns</p>
        <div className="campaign-grid">
          {campaigns.map((campaign) => <CampaignCard key={campaign.title} campaign={campaign} />)}
        </div>
        <div className="past-campaigns" id="past-campaigns">
          <p className="eyebrow">Past Campaigns</p>
          {pastCampaigns.map((campaign) => <div key={campaign}><strong>{campaign}</strong><span>View archive ↗</span></div>)}
        </div>
      </section>

      <section className="campaign-kit" id="campaign-kit">
        <div className="kit-hero">
          <span className="soft-pill dark">BUZZBOARD · EMPLOYEE AMPLIFICATION KIT</span>
          <h2>{headline}</h2>
          <p>Pick your UniFocus magazine ad, tune the campaign line, and help hospitality teams see what faster operations can feel like.</p>
          <button>UniFocus Magazine Ads <em>Phase I</em></button>
        </div>

        <section className="headline-generator">
          <div>
            <p className="eyebrow">Magazine ad copy generator</p>
            <h3>Make every portrait ad update from one campaign line.</h3>
          </div>
          <label>
            Campaign headline
            <input value={headline} onChange={(event) => setHeadline(event.target.value)} />
          </label>
          <div className="slogan-chip-row">
            {sloganIdeas.map((idea) => (
              <button key={idea} onClick={() => setHeadline(idea)}>{idea}</button>
            ))}
          </div>
        </section>

        <section className="asset-section">
          <p className="eyebrow">Magazine ads · portrait concepts</p>
          <div className="asset-grid">
            {assets.map((asset, index) => (
              <button className={`asset-card ${selectedAsset === index ? 'selected' : ''}`} key={asset.label} onClick={() => setSelectedAsset(index)}>
                <span className="real-badge">{asset.badge}</span>
                <MagazineAd asset={asset} headline={headline} compact />
                <small>{asset.label}</small>
              </button>
            ))}
          </div>
        </section>

        <section className="composer-section">
          <p className="eyebrow">Step 1 · Write your post</p>
          <div className="composer-card">
            <div className="selected-asset-preview"><MagazineAd asset={assets[selectedAsset]} headline={headline} /></div>
            <div className="post-preview">
              <div><p className="eyebrow">Your Post</p><button className="ghost-button">Change asset</button></div>
              <pre>{selectedPost.body}</pre>
              <button className="linkedin-button">in Post on LinkedIn</button>
            </div>
          </div>
        </section>

        <section className="template-section">
          <p className="eyebrow">Ready to post · grab and go</p>
          <div className="template-grid">
            {postTemplates.map((template) => (
              <button key={template.id} className={`template-card ${selectedPost.id === template.id ? 'selected' : ''}`} onClick={() => setSelectedTemplate(template.id)}>
                <span>{template.tone}</span>
                {template.recommended && <em>Recommended</em>}
                <h4>{template.title}</h4>
                <p>{template.body.slice(0, 146)}...</p>
              </button>
            ))}
          </div>
          <div className="selected-post-block">
            <div><p className="eyebrow">Selected Post</p><button className="ghost-button">Copy</button></div>
            <pre>{selectedPost.body}</pre>
          </div>
        </section>

        <section className="generator-section">
          <div className="tuning-panel">
            <h3>Tune your post</h3>
            <Slider label="Length" value={length} setValue={setLength} />
            <Slider label="Detail" value={detail} setValue={setDetail} />
            <Slider label="Energy" value={energy} setValue={setEnergy} />
            <label className="direction-field">Custom direction<textarea value={customDirection} onChange={(event) => setCustomDirection(event.target.value)} /></label>
          </div>
          <div className="generated-panel">
            <div><p className="eyebrow">Generated Post</p><button className="ghost-button">Copy</button></div>
            <pre>{generatedPost}</pre>
            <button className="linkedin-button">in Post on LinkedIn</button>
          </div>
        </section>
      </section>

      <section className="scoreboard" id="scoreboard">
        <div>
          <p className="eyebrow">Scoreboard</p>
          <h3>All-Time Leaderboard</h3>
          <p>Track your team's impact across campaigns, posts, and engagement.</p>
        </div>
        <ol>
          <li><span>01</span><strong>Avery Chen</strong><em>208 pts</em></li>
          <li><span>02</span><strong>Maya Patel</strong><em>130 pts</em></li>
          <li><span>03</span><strong>Jordan Lee</strong><em>120 pts</em></li>
        </ol>
      </section>
    </section>
  );
}

function CampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <article className={`campaign-card ${campaign.status === 'Coming Soon' ? 'coming-soon' : ''}`}>
      <span className={`status-pill ${campaign.status === 'Live' ? 'live' : 'planning'}`}>● {campaign.status}</span>
      <h4>{campaign.title}</h4>
      <p>{campaign.description}</p>
      <small>{campaign.date}</small>
      {campaign.status === 'Live' && <a href="#campaign-kit">Open kit →</a>}
    </article>
  );
}

function MagazineAd({ asset, headline, compact = false }: { asset: MagazineAsset; headline: string; compact?: boolean }) {
  return (
    <div className={`magazine-ad ad-${asset.scene} ${compact ? 'compact' : 'hero-magazine-ad'}`} aria-label={`${asset.label} magazine ad preview`}>
      <div className="magazine-photo">
        <span className="window one" />
        <span className="window two" />
        <span className="window three" />
        <span className="lobby-line" />
      </div>
      <div className="magazine-copy">
        <div className="unifocus-mark">UniFocus</div>
        <strong>{headline}</strong>
        <p>AI-powered workforce and operations intelligence for hotels that cannot afford to slow down.</p>
        <em>Hospitality operations, accelerated.</em>
      </div>
      <div className="magazine-footer"><span>WORKFORCE</span><span>FORECASTING</span><span>OPERATIONS</span></div>
    </div>
  );
}

function Slider({ label, value, setValue }: { label: string; value: number; setValue: (value: number) => void }) {
  return (
    <label className="slider-field">
      <span>{label}</span>
      <input type="range" min="0" max="100" value={value} onChange={(event) => setValue(Number(event.target.value))} />
      <em>{value > 66 ? 'High' : value < 34 ? 'Low' : 'Medium'}</em>
    </label>
  );
}

export default App;
