export const SITE_URL = "https://think4ever.com";

// Front-matter "author" values mapped to one author entity.
// Add personal profile URLs (LinkedIn, X, GitHub, Microsoft Tech Community) to sameAs:
// they are the strongest signal linking this person to the old Microsoft-era content.
export const AUTHORS = {
  "sunil-kishen": {
    slug: "sunil-kishen",
    name: "Sunil Kishen",
    jobTitle: "Chief Product Officer",
    aliases: ["Sunil", "Sunil Kishen"],
    bio: "Sunil Kishen is Chief Product Officer at Think4Ever. He writes about turning existing code into a living system blueprint, governing business context for AI coding agents, and building software from intent.",
    // DEMO URLs: replace with Sunil's real profiles before going live.
    sameAs: [
      "https://www.linkedin.com/in/sunilkishen/",
      "https://x.com/sunilkishen",
      "https://github.com/sunilkishen",
      "https://techcommunity.microsoft.com/users/sunilkishen",
    ],
  },
};

const ALIAS_INDEX = Object.values(AUTHORS).flatMap((author) =>
  author.aliases.map((alias) => [alias.toLowerCase(), author]),
);

export function resolveAuthor(name) {
  if (!name) return null;
  const match = ALIAS_INDEX.find(([alias]) => alias === String(name).trim().toLowerCase());
  return match ? match[1] : null;
}
