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
  accent: 'amber' | 'blue' | 'purple' | 'green' | 'coral' | 'ink';
  tags: string[];
};

type TopTool = {
  title: string;
  status: 'Live' | 'Building' | 'Planning';
  description: string;
  accent: 'ink' | 'coral' | 'purple';
  tags: string[];
};

type ProjectGroup = {
  code: string;
  title: string;
  description: string;
  meta: string;
  cards: ProjectCard[];
};

type HarperCard = {
  title: string;
  status: 'Live' | 'Building';
  description: string;
  accent: 'purple' | 'ink';
  tags: string[];
};

type PostTemplate = {
  id: string;
  tone: string;
  badges: string[];
  title: string;
  body: string;
  recommended?: boolean;
};

type LeaderboardEntry = {
  rank: string;
  initial: string;
  name: string;
  points: number;
  campaigns: string[];
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
    date: 'May 7, 2026 · Hospitality',
  },
  {
    title: 'Hotel Ops AI Launch Kit',
    status: 'Live',
    description: 'Share approved hotel operations messaging for workforce, scheduling, and service teams.',
    date: 'May 3, 2026 · Hospitality',
  },
  {
    title: "How I AI — John's Episode",
    status: 'Coming Soon',
    description: 'A future employee advocacy kit for an upcoming hospitality AI episode — watch this space.',
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

const pastCampaigns = [
  { title: 'Hospitality Staffing Trends', date: 'Mar 4, 2026' },
  { title: 'Forecasting Playbook Drop', date: 'Feb 18, 2026' },
  { title: 'Operations AI Teaser', date: 'Feb 4, 2026' },
  { title: 'Guest Service Readiness 101', date: 'Jan 22, 2026' },
];

const topTools: TopTool[] = [
  {
    title: 'Buzzboard',
    status: 'Live',
    accent: 'ink',
    description: "Hospitality teammates grab curated LinkedIn captions to amplify UniFocus campaigns — every shift, every property.",
    tags: ['advocacy', 'linkedin', 'launches'],
  },
  {
    title: 'Forecasting Agent',
    status: 'Building',
    accent: 'coral',
    description: 'Weekly forecasting agent that ingests demand signals across properties and recommends labour and inventory adjustments.',
    tags: ['forecasting', 'labour', 'agents'],
  },
  {
    title: 'Campaign Asset Generator',
    status: 'Live',
    accent: 'purple',
    description: 'Brief in. Full magazine spread, email sequence, search copy, and conversational ad scripts out — on-brand for hospitality.',
    tags: ['creative', 'magazine ads', 'velocity'],
  },
];

const projectGroups: ProjectGroup[] = [
  {
    code: '03',
    title: 'Project: Front Desk Lab',
    description: 'Lift hotel direct-booking conversion — fewer abandoned bookings, more confirmed stays.',
    meta: '5 live · 4 ops',
    cards: [
      {
        title: 'Direct Booking Review',
        description: 'Performance audit across hotelier landing pages — UX scoring, conversion gaps, and uplift experiments queued for the booking flow.',
        status: 'Live',
        accent: 'coral',
        tags: ['landing pages', 'CRO', 'hotelier'],
      },
      {
        title: 'Booking Scoreboard',
        description: 'Live scoring of property booking funnels with weekly impact reads to highlight the biggest conversion levers worth shipping next.',
        status: 'Building',
        accent: 'green',
        tags: ['scoreboard', 'CRO', 'weekly read'],
      },
      {
        title: 'Front Desk Messaging',
        description: 'Hospitality-specific landing and email messaging built around the guest journey — channels, hooks, copy, segments, and tests.',
        status: 'Live',
        accent: 'ink',
        tags: ['messaging', 'lifecycle', 'desk team'],
      },
      {
        title: 'Hotelier Social Mockups',
        description: 'LinkedIn-ready hospitality mockups for the booking conversion narrative — 2 hero, 3 vertical, plus visual rotations for ABM.',
        status: 'Live',
        accent: 'purple',
        tags: ['social', 'creative', 'rotations'],
      },
    ],
  },
  {
    code: '04',
    title: 'Project: Magazine Cow',
    description: 'Bold hospitality creative designed to stand out — to prove that hotels can ship category-defining campaigns.',
    meta: '4 live · 6 ops',
    cards: [
      {
        title: 'Magazine Messaging Experiment',
        description: '5 hospitality messaging tracks tested across UniFocus magazine ads — top performer beat the control by 2.42% on intent for hotelier readers.',
        status: 'Live',
        accent: 'green',
        tags: ['messaging', 'pilot', 'magazine'],
      },
      {
        title: 'OOH Creative Brief',
        description: 'Out-of-home creative direction for hotel district campaigns near major conference centres — flagship visuals + city-by-city activation.',
        status: 'Live',
        accent: 'coral',
        tags: ['OOH', 'flagship', 'activation'],
      },
      {
        title: 'Cover Builder',
        description: 'A1B test your headline, swap in property-specific imagery, and ship cover-ready magazine ads in minutes — not weeks.',
        status: 'Live',
        accent: 'ink',
        tags: ['magazine', 'builder', 'speed'],
      },
      {
        title: 'Hotelier Viral Social Campaign',
        description: 'A hospitality social loop built for the hotelier feed — narrative, casting, hashtags, and a full launch plan.',
        status: 'Planning',
        accent: 'purple',
        tags: ['social', 'launch', 'narrative'],
      },
    ],
  },
];

const harperCards: HarperCard[] = [
  {
    title: 'Harper Optimization Hub',
    status: 'Live',
    accent: 'purple',
    description: "Kanban board of inbound agent improvement projects — conversation reviews, AI behaviour changes, and a daily ops journal for the team.",
    tags: ['agents', 'optimisation', 'journal'],
  },
  {
    title: 'Harper Preview Testing',
    status: 'Live',
    accent: 'ink',
    description: 'Test the staging Harper agent live in a hotelier mockup. Chat with the bot and leave feedback notes to flag tone or booking issues.',
    tags: ['staging', 'preview', 'feedback'],
  },
];

const leaderboard: LeaderboardEntry[] = [
  { rank: '01', initial: 'A', name: 'Avery Chen', points: 208, campaigns: ['Magazine Ads', 'Spark Speakers', 'Spark Attendees Logos', 'Hotelier'] },
  { rank: '02', initial: 'M', name: 'Maya Patel', points: 130, campaigns: ['Hotelier', 'Spark Speakers'] },
  { rank: '03', initial: 'J', name: 'Jordan Lee', points: 120, campaigns: ['Magazine Ads', 'AI Readiness'] },
  { rank: '04', initial: 'S', name: 'Sam Rivera', points: 115, campaigns: ['Hotelier'] },
];

function createPostTemplates(slogan: string): PostTemplate[] {
  return [
    {
      id: 'operator',
      tone: 'Operator-led',
      badges: ['DIRECT', 'BRAND'],
      title: 'Hotel ops waits for no one.',
      body: `${slogan}\n\nHotels do not get to pause while teams catch up. Guests arrive, shifts change, rooms turn over, and service expectations keep climbing.\n\nThat is why UniFocus is putting AI to work where hospitality moves fastest.\n\n#HospitalityAI #HotelOperations #UniFocus`,
    },
    {
      id: 'spotted',
      tone: 'Spotted',
      badges: ['WARM', 'ENGAGING'],
      title: 'Seen this campaign yet?',
      recommended: true,
      body: `Seen this campaign?\n\n"${slogan}"\n\nA practical reminder that hotel operations need technology that can keep up with the pace of the floor, the desk, and the guest.\n\nUniFocus helps hospitality teams move faster with smarter workforce and operations intelligence.\n\n#HospitalityTech #HotelAI #WorkforceManagement`,
    },
    {
      id: 'bold',
      tone: 'Bold',
      badges: ['DIRECT', 'HIGH-ENERGY'],
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

    return `${headline}\n\nHere's the ${lengthLabel}, ${detailLabel}, ${energyLabel} take: hospitality teams already move quickly. UniFocus helps hotel operators turn that pace into better forecasting, smarter staffing, and smoother guest service.\n\n${customDirection}\n\n#HospitalityAI #HotelOperations #UniFocus`;
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
        <a href="#projects">Projects ▾</a>
        <a href="#mini-tools">Mini Tools ▾</a>
        <a href="#status">Status</a>
      </nav>

      <section className="gtm-hero">
        <div>
          <span className="soft-pill">AI Growth Projects</span>
          <h2>GTM Growth <span>Command Center.</span> 🚀</h2>
          <p>Experiments, ABM intelligence, and growth infrastructure in one polished dashboard.</p>
        </div>
        <a className="black-button" href="#projects">Explore projects →</a>
      </section>

      <section className="calendar-section" id="calendar">
        <div className="section-heading inverted">
          <span className="eyebrow inverted-eyebrow">Featured</span>
          <div>
            <h3>Integrated Marketing Plan</h3>
            <p>The main project calendar tracking every integrated campaign across channels — podcast, direct mail, paid social, case study, and webinar.</p>
          </div>
          <button className="light-button">Open full plan ↗</button>
        </div>
        <MarketingTimeline />
      </section>

      <section className="top-tools-section" id="mini-tools">
        <div className="section-heading-row">
          <span className="eyebrow">Tools & Utilities</span>
          <h3>Top tools</h3>
          <p>Standalone tools for campaign creation, channel auditing, and employee advocacy.</p>
        </div>
        <div className="top-tool-grid">
          {topTools.map((tool) => <TopToolCard key={tool.title} tool={tool} />)}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <p className="eyebrow">Active Projects</p>
        {projectGroups.map((group) => (
          <div className="project-group" key={group.title}>
            <div className="project-group-heading">
              <span className="group-code">{group.code}</span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <small>{group.meta}</small>
              </div>
            </div>
            <div className="project-card-grid four">
              {group.cards.map((card) => <ProjectCardView key={card.title} card={card} />)}
            </div>
          </div>
        ))}

        <div className="project-group">
          <div className="project-group-heading">
            <span className="group-code">05</span>
            <div>
              <h3>Harper — Inbound AI Agent</h3>
              <p>Tools to optimise the UniFocus inbound chat agent — conversation analysis, widget improvements, and behaviour tracking.</p>
              <small className="inbound-eyebrow">Inbound AI Agent</small>
            </div>
          </div>
          <div className="harper-grid">
            {harperCards.map((card) => <HarperCardView key={card.title} card={card} />)}
          </div>
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
    { name: 'AI Readiness 101', start: '8%', width: '28%', colour: 'slate', label: 'AI Readiness 101' },
    { name: 'T&H Summer Campaigns', start: '25%', width: '68%', colour: 'blue', label: 'T&H Summer Campaign' },
    { name: 'CX Network — Sponsored Webinar', start: '25%', width: '22%', colour: 'amber', label: 'CX Network — Sponsored Webinar' },
    { name: 'State of CX Report', start: '15%', width: '51%', colour: 'purple', label: 'State of CX Report · Delight Index' },
  ];

  return (
    <div className="timeline-card">
      <div className="timeline-toolbar">
        <strong>📅 Integrated Marketing Plan <em>· Hospitality Insight ⌄</em></strong>
        <div className="timeline-toolbar-tabs">
          <span className="active">Calendar</span><span>List</span><span>Message Map</span><span>Email Calendar</span>
          <em className="pill add">+ Program</em><em className="pill light">+ Campaign</em>
        </div>
      </div>
      <div className="timeline-legend">
        <span className="eyebrow muted">Campaigns · Programs</span>
        <div className="legend-dots">
          <em><i className="dot slate" /> AI Readiness 101</em>
          <em><i className="dot blue" /> T&H Summer</em>
          <em><i className="dot amber" /> CX Network</em>
          <em><i className="dot purple" /> Delight Spark IF</em>
          <em><i className="dot pink" /> Fan Engagement</em>
        </div>
      </div>
      <div className="timeline-months">
        <span /><span>Mar 2026</span><span>Apr 2026</span><span>May 2026</span><span>Jun 2026</span><span>Jul 2026</span>
      </div>
      {rows.map((row) => (
        <div className="timeline-row" key={row.name}>
          <span className="timeline-row-name">{row.name}</span>
          <div className="timeline-track">
            <i className={`timeline-bar ${row.colour}`} style={{ left: row.start, width: row.width }}>
              <em>{row.label}</em>
            </i>
          </div>
        </div>
      ))}
    </div>
  );
}

function TopToolCard({ tool }: { tool: TopTool }) {
  return (
    <article className="top-tool-card">
      <div className={`top-tool-thumb ${tool.accent}`}>
        <strong>{tool.title}</strong>
        <div className="thumb-mock">
          <span className="thumb-mock-bar" />
          <span className="thumb-mock-bar short" />
          <span className="thumb-mock-bar mid" />
          <span className="thumb-mock-grid"><i /><i /><i /></span>
        </div>
      </div>
      <div className="card-body">
        <span className={`status-pill ${tool.status.toLowerCase()}`}>● {tool.status}</span>
        <h4>{tool.title}</h4>
        <p>{tool.description}</p>
        <div className="tag-row">{tool.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
    </article>
  );
}

function ProjectCardView({ card }: { card: ProjectCard }) {
  return (
    <article className="project-card">
      <div className={`project-thumb ${card.accent}`}>
        <strong>{card.title}</strong>
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

function HarperCardView({ card }: { card: HarperCard }) {
  return (
    <article className="harper-card">
      <div className={`harper-thumb ${card.accent}`}>
        <strong>{card.title.replace('Harper ', '')}</strong>
        <div className="harper-mock">
          <span className="harper-mock-bar" />
          <span className="harper-mock-bar short" />
          <span className="harper-mock-line" />
          <span className="harper-mock-line short" />
        </div>
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
          {pastCampaigns.map((campaign) => (
            <div key={campaign.title}>
              <strong>{campaign.title}</strong>
              <em>{campaign.date}</em>
              <a href="#">View archive ↗</a>
            </div>
          ))}
        </div>
      </section>

      <section className="scoreboard-section" id="scoreboard">
        <div className="leaderboard-card">
          <header>
            <div>
              <h3>All-Time Leaderboard</h3>
              <p>Top amplifiers across all campaigns.</p>
            </div>
            <div className="contributor-count"><strong>45</strong><small>Contributors</small></div>
          </header>
          <ol>
            {leaderboard.map((entry) => (
              <li key={entry.rank}>
                <span className="rank">{entry.rank}</span>
                <span className="avatar">{entry.initial}</span>
                <div className="entry-info">
                  <strong>{entry.name.charAt(0)}***** {'•'.repeat(6)}</strong>
                  <small>{Math.max(2, Math.round(entry.points / 30))} posts</small>
                </div>
                <div className="entry-tags">{entry.campaigns.map((c) => <span key={c}>{c}</span>)}</div>
                <em>{entry.points}</em>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="campaign-kit" id="campaign-kit">
        <nav className="top-nav product-nav kit-nav">
          <div className="brand-mark">● Buzzboard</div>
          <span className="crumb">UniFocus Magazine Ad Kit</span>
          <a href="#live-campaigns" className="kit-back">← All Campaigns</a>
        </nav>

        <div className="kit-hero">
          <span className="soft-pill dark">BUZZBOARD · EMPLOYEE AMPLIFICATION KIT</span>
          <h2>{headline} 🏨</h2>
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
              <div><p className="eyebrow">Your Post</p><button className="ghost-button">↻ Change asset</button></div>
              <pre>{selectedPost.body}</pre>
              <button className="linkedin-button">in Post on LinkedIn</button>
            </div>
          </div>
        </section>

        <section className="template-section">
          <p className="eyebrow">Ready to post · grab and go</p>
          <div className="template-grid">
            {postTemplates.map((template) => (
              <button key={template.id} className={`template-card ${selectedPost.id === template.id ? 'selected' : ''} ${template.recommended ? 'recommended' : ''}`} onClick={() => setSelectedTemplate(template.id)}>
                <header>
                  <span>{template.tone}</span>
                  {template.recommended && <em>Recommended</em>}
                </header>
                <p>{template.body.slice(0, 220)}…</p>
                <div className="template-badges">{template.badges.map((badge) => <i key={badge}>{badge}</i>)}</div>
              </button>
            ))}
          </div>
          <div className="selected-post-block">
            <div><p className="eyebrow">Selected Post</p><button className="ghost-button">⧉ Copy</button></div>
            <pre>{selectedPost.body}</pre>
            <small className="copy-note">Post copied to clipboard automatically when you click the button.</small>
          </div>
        </section>

        <section className="generator-section">
          <p className="eyebrow generator-eyebrow">Or generate something custom</p>
          <div className="generator-row">
            <div className="tuning-panel">
              <h3>Tune your post</h3>
              <Slider label="Length" value={length} setValue={setLength} hints={['Short', 'Long']} />
              <Slider label="Detail" value={detail} setValue={setDetail} hints={['Simple', 'Specific']} />
              <Slider label="Energy" value={energy} setValue={setEnergy} hints={['Calm', 'Upbeat']} />
              <label className="direction-field">
                <span>Custom direction</span>
                <textarea value={customDirection} onChange={(event) => setCustomDirection(event.target.value)} placeholder="Add your role, a personal hook, or anything specific to emphasise" />
              </label>
              <button className="generate-button">★ Generate My Post</button>
            </div>
            <div className="generated-panel">
              <div><p className="eyebrow">Generated Post</p><button className="ghost-button">⧉ Copy</button></div>
              <pre>{generatedPost}</pre>
              <small className="copy-note">Post copied to clipboard automatically when you click the button.</small>
              <button className="linkedin-button">in Post on LinkedIn</button>
            </div>
          </div>
        </section>
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
      {campaign.status === 'Live' ? <a href="#campaign-kit">Open kit →</a> : <span className="coming-soon-tag">Building kit…</span>}
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

function Slider({ label, value, setValue, hints }: { label: string; value: number; setValue: (value: number) => void; hints: [string, string] }) {
  return (
    <label className="slider-field">
      <header><span>{label}</span><em>{value > 66 ? 'High' : value < 34 ? 'Low' : 'Medium'}</em></header>
      <input type="range" min="0" max="100" value={value} onChange={(event) => setValue(Number(event.target.value))} />
      <div className="slider-hints"><small>{hints[0]}</small><small>{hints[1]}</small></div>
    </label>
  );
}

export default App;
