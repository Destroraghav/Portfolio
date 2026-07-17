export interface QuizItem {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

// Module quizzes, keyed by `${course}/${moduleSlug}`. Explanations are drawn
// from the lesson text, not invented.
export const quizzes: Record<string, QuizItem[]> = {
  'transfer-pricing/1-introduction': [
    {
      question: 'What is a transfer price?',
      options: [
        'The price a company pays to move goods across a customs border',
        'The price set for a transaction between two entities in the same corporate group',
        'The exchange rate used to convert foreign profits',
        'A penalty charged by tax authorities for underpayment',
      ],
      correctIndex: 1,
      explanation:
        'A transfer price is the internal price for a controlled transaction between two entities in the same group. It matters because it decides which country the profit (and tax) lands in.',
    },
    {
      question:
        "In the McDonald's Luxembourg case, why did the European Commission ultimately conclude there was no illegal state aid?",
      options: [
        "McDonald's paid the correct amount of tax in the US instead",
        "Luxembourg had applied its own law and tax treaty with the US correctly; the double non-taxation came from a mismatch between the two countries' rules, not a special favour",
        'The investigation ran out of time before a decision',
        "McDonald's voluntarily paid back the unpaid tax",
      ],
      correctIndex: 1,
      explanation:
        'The Commission found Luxembourg had correctly applied its own law and its US treaty; the double non-taxation was a by-product of the two systems not lining up, not a selective advantage.',
    },
    {
      question:
        'Which of the following would NOT typically make two companies "associated enterprises"?',
      options: [
        "One company owns 60% of the other's shares",
        'A minority shareholder holds veto rights over the annual budget',
        'Two companies occasionally buy from the same third-party supplier',
        'One company depends on another for 90% of its revenue under an exclusivity contract',
      ],
      correctIndex: 2,
      explanation:
        'Occasionally sharing a third-party supplier creates no control or dependence. Association requires legal control (ownership / veto) or economic dependence.',
    },
    {
      question: 'What does "substance over form" mean in a transfer pricing context?',
      options: [
        'Written contracts always take priority over how a business actually operates',
        'What actually happens operationally matters more than how a relationship is labelled on paper',
        'Only physical assets count as "substance"',
        'Tax authorities ignore contracts entirely',
      ],
      correctIndex: 1,
      explanation:
        'Substance over form means the real economic reality of who does what and who bears risk outweighs how the arrangement is labelled on paper.',
    },
    {
      question:
        "Why is the arm's length principle hard to apply to a unique intangible asset, like a proprietary algorithm or a strong brand?",
      options: [
        "Intangible assets aren't covered by the OECD guidelines",
        "There's usually no comparable market transaction to benchmark the value against",
        'Intangible assets are always overvalued by tax authorities',
        "The arm's length principle only applies to physical goods",
      ],
      correctIndex: 1,
      explanation:
        'A unique intangible has no genuine market twin, so there is no comparable transaction to benchmark its value against - the "unique intangible problem".',
    },
    {
      question:
        'In a functional analysis (FAR), which factor determines whether a distributor should earn a higher profit margin?',
      options: [
        'The size of its office',
        'How many employees it has, regardless of their role',
        'The complexity of its functions, the value of assets it uses, and the real risk it bears',
        'How long it has operated in the market',
      ],
      correctIndex: 2,
      explanation:
        'Margin follows functions, assets, and real risk - more complexity and genuine risk justify a higher, more variable margin; less means a lower, stable one.',
    },
    {
      question:
        'A distributor’s contract says it bears full inventory risk, but in practice its parent company buys back all unsold stock at full price every quarter. How should this be treated?',
      options: [
        'As a full-fledged distributor, because the contract says so',
        'As a limited risk distributor, because the buy-back guarantee removes the real risk regardless of the contract wording',
        "It can't be classified without knowing its revenue",
        'As neither category; buy-back guarantees are irrelevant to classification',
      ],
      correctIndex: 1,
      explanation:
        'The parent’s full buy-back removes the real inventory risk, so despite the contract wording it is a limited risk distributor - substance over form.',
    },
    {
      question: "What is the ultimate goal of the arm's length principle?",
      options: [
        'To minimize the total tax a multinational group pays worldwide',
        'To ensure profit is taxed in the country where the real economic activity and value creation happen',
        'To standardize prices across all countries a group operates in',
        'To eliminate the need for tax audits',
      ],
      correctIndex: 1,
      explanation:
        'The principle exists so profit is taxed where the real economic activity and value creation occur, not wherever a group finds it convenient to book it.',
    },
  ],
};
