import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

type FocusArea = {
  label: string;
  summary: string;
  highlights: string[];
};

type TimelineItem = {
  period: string;
  role: string;
  company: string;
  summary: string;
  achievements: string[];
};

type ProjectHighlight = {
  name: string;
  description: string;
  stack: string[];
  metric: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly name = 'Avery Carter';
  readonly role = 'Frontend Engineer';
  readonly intro =
    'Design-oriented engineer crafting performant, inclusive interfaces with React and Angular.';

  readonly focusAreas: FocusArea[] = [
    {
      label: 'Interface Craftsmanship',
      summary:
        'Frictionless interactions, modern animation, and resilient layouts for design-heavy surfaces.',
      highlights: [
        'Delivered component refresh that raised key UX satisfaction score from 3.6 → 4.5.',
        'Built motion system with Angular animation primitives & React Spring for consistent feel.'
      ]
    },
    {
      label: 'Data Visualization',
      summary:
        'Distilling complex telemetry into approachable, accessible dashboards.',
      highlights: [
        'Partnered with product to launch timeline insights deck, boosting activation 18%.',
        'Specialize in D3, Highcharts, and custom canvas renderers for high-volume datasets.'
      ]
    },
    {
      label: 'Design Systems',
      summary:
        'Reusable component ecosystems that bridge designers, React squads, and Angular pods.',
      highlights: [
        'Shipped token-driven theming powering React Native & Angular portals from a single source.',
        'Guided 20+ teams through adoption with documentation, Storybook workshops, and lint rules.'
      ]
    }
  ];

  readonly selectedFocus = signal(this.focusAreas[0]);

  readonly timeline: TimelineItem[] = [
    {
      period: '2023 — Present',
      role: 'Frontend Engineer',
      company: 'PulseAudio SaaS',
      summary:
        'Owns growth surface where artists manage distribution, analytics, and content campaigns.',
      achievements: [
        'Led React migration of legacy AngularJS funnels, cutting bounce rate by 24%.',
        'Introduced Angular micro-app that powers embeddable analytics without framework lock-in.'
      ]
    },
    {
      period: '2021 — 2023',
      role: 'UI Developer',
      company: 'Northwind Retail Platform',
      summary:
        'Shipped omnichannel fulfilment tooling for internal ops, balancing speed with ergonomic UIs.',
      achievements: [
        'Implemented Angular forms revamp, saving fulfilment agents ~6 minutes per workflow.',
        'Partnered with designers on React prototyping kit to accelerate experiment cadence.'
      ]
    }
  ];

  readonly projects: ProjectHighlight[] = [
    {
      name: 'Creator Growth Console',
      description:
        'React + Next.js dashboard showcasing actionable insights with live collaboration cursors.',
      stack: ['React 18', 'Next.js 14', 'tRPC', 'Radix UI'],
      metric: 'Churn reduction of 11% within two release cycles.'
    },
    {
      name: 'Smart Routing Orchestrator',
      description:
        'Angular standalone app orchestrating fulfilment rules with real-time validation visualizations.',
      stack: ['Angular 17', 'RxJS', 'NgRx Signals', 'Mapbox GL'],
      metric: 'Cut support tickets around routing errors by 38%.'
    },
    {
      name: 'Design System CLI',
      description:
        'Codegen pipeline that syncs design tokens into React + Angular component packages.',
      stack: ['Node.js', 'Changesets', 'Style Dictionary', 'Storybook'],
      metric: 'Reduced release toil by 4 engineer-hours per week.'
    }
  ];

  readonly toolset = [
    'TypeScript',
    'Next.js',
    'Angular Signals',
    'RxJS',
    'React Query',
    'Tailwind',
    'Highcharts',
    'Storybook',
    'Playwright',
    'Figma'
  ];

  readonly selectedFocusIndex = computed(() =>
    this.focusAreas.indexOf(this.selectedFocus())
  );

  selectFocus(area: FocusArea) {
    this.selectedFocus.set(area);
  }
}
