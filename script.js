const templates = [
  {
    title: "Feature adoption",
    meta: "Learn whether customers notice, understand, and continue using a new feature after launch. Brigz helps teams compare early interest with actual adoption signals so they can improve onboarding, messaging, or the feature itself.",
  },
  {
    title: "Concept test",
    meta: "Validate a product idea before the team invests build time. Ask customers what problem they think it solves, how valuable it feels, and what would make the concept stronger.",
  },
  {
    title: "Pricing model",
    meta: "Understand how customers respond to pricing, plans, bundles, and value claims. Use the feedback to refine packaging and reduce uncertainty before making commercial changes.",
  },
  {
    title: "Pain point review",
    meta: "Identify where customers feel blocked, confused, or frustrated in an important workflow. Brigz helps product teams collect the reason behind friction while the experience is still fresh.",
  },
  {
    title: "Activation research",
    meta: "Find out why new users do or do not reach the moment where the product becomes valuable. Use customer responses to improve onboarding, setup, guidance, and first-use success.",
  },
  {
    title: "Website optimization",
    meta: "Discover what visitors understand, miss, or question while moving through your website. Brigz helps teams improve pages, forms, navigation, and conversion paths with direct customer feedback.",
  },
];

const grid = document.getElementById("templateGrid");

grid.innerHTML = templates
  .map(
    (item) => `
      <article class="template-card">
        <strong>${item.title}</strong>
        <small>${item.meta}</small>
      </article>
    `,
  )
  .join("");
