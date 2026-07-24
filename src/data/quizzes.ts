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

  'transfer-pricing/2-traditional-methods': [
    {
      question:
        'Which traditional method directly compares the price of the controlled transaction to a price charged between independent parties?',
      options: ['Resale Price Method', 'Cost Plus Method', 'CUP Method', 'TNMM'],
      correctIndex: 2,
      explanation: 'CUP compares the price directly; RPM and Cost Plus compare gross margins or markups instead.',
    },
    {
      question:
        'In the Glencore case, what did the multi-year dispute ultimately turn on, even though copper concentrate has a public reference price?',
      options: [
        'Whether Switzerland is a legitimate place to base a trading company',
        'The specific contract terms, quality specifications, and market adjustments needed to make the comparison genuinely comparable',
        'Whether Glencore paid any corporate tax at all in Australia',
        'Whether copper is a controlled substance',
      ],
      correctIndex: 1,
      explanation: 'Even a public reference price needed adjustment for contract terms, quality specs, and market realities before it could serve as a true comparable.',
    },
    {
      question: 'RPM is best suited to which type of entity?',
      options: [
        'A manufacturer with a heavily patented product',
        'A distributor that resells finished goods without substantially altering them',
        'A company providing intra-group loans',
        'A holding company with no operations',
      ],
      correctIndex: 1,
      explanation: 'RPM benchmarks distribution gross margins, so it fits simple resellers that do not transform the product.',
    },
    {
      question:
        'Under the Cost Plus method, if a factory’s cost base is understated (some real production costs are left out), what happens to the calculated transfer price?',
      options: [
        'It becomes too high',
        'It becomes too low, understating the arm’s length price',
        'It has no effect on the transfer price',
        'The method becomes RPM instead',
      ],
      correctIndex: 1,
      explanation: 'A smaller cost base times (1 + markup) produces a lower transfer price, understating the arm’s length result.',
    },
    {
      question: 'An internal CUP is generally considered more reliable than an external CUP because:',
      options: [
        'It is always a higher price',
        'The seller, product, and market conditions are already the same or very close, requiring fewer adjustments',
        'Internal transactions do not need to be arm’s length',
        'Tax authorities prefer round numbers',
      ],
      correctIndex: 1,
      explanation: 'With an internal CUP the seller, product, and market are already close, so fewer adjustments are needed.',
    },
    {
      question: 'Which method works backward from the resale price to an independent customer?',
      options: ['CUP', 'Resale Price Method', 'Cost Plus Method', 'Profit Split'],
      correctIndex: 1,
      explanation: 'RPM starts at the resale price and subtracts an arm’s length gross margin.',
    },
  ],

  'transfer-pricing/3-comparability-benchmarking': [
    {
      question: 'Why is the "tested party" usually the least complex party in a transaction?',
      options: [
        'It is a legal requirement in every country',
        'Independent comparables are easier to find for simple, routine functions than for unique, complex ones',
        'Complex parties are always exempt from testing',
        'It reduces the amount of tax owed',
      ],
      correctIndex: 1,
      explanation: 'Simple, routine entities have real-world twins; complex, unique ones rarely do, so comparables are easier to find.',
    },
    {
      question: 'Which of the following is NOT one of the five OECD comparability factors?',
      options: [
        'Contractual terms',
        'Business strategies',
        'The tested party’s total headcount',
        'Economic circumstances',
      ],
      correctIndex: 2,
      explanation: 'The five factors are property/service characteristics, functional analysis, contractual terms, economic circumstances, and business strategies.',
    },
    {
      question: 'Why might a database search returning 40 initial matches end up with only 11 usable comparables?',
      options: [
        'Database errors are common',
        'Many initial matches fail independence, activity-match, or data-quality screens',
        'Tax authorities cap peer sets at 11 companies',
        'Companies refuse to share their data',
      ],
      correctIndex: 1,
      explanation: 'Most initial hits fail the qualitative screens for independence, real activity match, or data quality.',
    },
    {
      question: 'Why is the interquartile range preferred over a simple average of all peer results?',
      options: [
        'It is faster to calculate',
        'It reduces the distorting effect of outlier companies at either extreme',
        'Tax authorities dislike averages',
        'It always produces a higher number',
      ],
      correctIndex: 1,
      explanation: 'Trimming the extreme quarters keeps outliers from dragging the result away from the typical independent margin.',
    },
    {
      question: 'If a tested party’s result falls below Q1 of the interquartile range, what typically happens?',
      options: [
        'Nothing, being below Q1 is acceptable',
        'A transfer pricing adjustment is likely, often correcting the result up to the median',
        'The comparables are automatically discarded',
        'The tested party is exempted from further review',
      ],
      correctIndex: 1,
      explanation: 'A result outside the range usually triggers an adjustment, commonly to the median.',
    },
    {
      question:
        'A distributor that designs its own proprietary products and sells under its own brand would generally be excluded as a comparable for a routine reseller because:',
      options: [
        'It is too profitable to be included in any study',
        'It performs additional functions (design, brand-building) that the tested party does not, breaking functional comparability',
        'Own-brand companies are always public companies',
        'Comparables must be in the exact same country',
      ],
      correctIndex: 1,
      explanation: 'Extra functions like design and brand-building break functional comparability with a simple reseller.',
    },
  ],

  'transfer-pricing/4-profit-methods': [
    {
      question: 'Why is TNMM the most widely used transfer pricing method in practice?',
      options: [
        'It always produces the lowest tax bill',
        'It tolerates more product and functional differences than price- or gross-margin-based methods, making comparables easier to find',
        'It is the only method recognised by the OECD',
        'It does not require any benchmarking study',
      ],
      correctIndex: 1,
      explanation: 'Working at the net-margin level means reasonably comparable margins are attainable even when price or gross-margin comparables are not.',
    },
    {
      question: "In the Coca-Cola case, why did the Tax Court largely side with the IRS's profit reallocation?",
      options: [
        'Coca-Cola failed to file any tax returns',
        'The Court found the foreign supply points functioned like contract manufacturers that did not own the valuable brand/formula intangibles, so their return should reflect a routine margin, not a share of brand-driven profit',
        'The IRS proved Coca-Cola broke US law',
        'Coca-Cola had no transfer pricing documentation at all',
      ],
      correctIndex: 1,
      explanation: 'Routine supply points that do not own the brand or formula should earn a routine margin, not a share of brand-driven profit.',
    },
    {
      question: "Which profit level indicator did the Coca-Cola case's reasoning most directly relate to?",
      options: [
        'Number of employees',
        'A net-margin-style comparison (comparable profits method / TNMM equivalent)',
        'Market capitalisation',
        'Gross revenue only',
      ],
      correctIndex: 1,
      explanation: 'The comparable profits method is the US equivalent of TNMM, a net-margin comparison.',
    },
    {
      question: 'Profit Split is generally reserved for situations where:',
      options: [
        'One party is clearly routine and the other complex',
        'Both related parties contribute unique, valuable functions or intangibles, with no obvious simple tested party',
        'The transaction involves only tangible goods',
        'Comparables are easy to find',
      ],
      correctIndex: 1,
      explanation: 'When both sides bring something genuinely unique, no single tested party captures the picture, so the profit is split.',
    },
    {
      question: 'In residual analysis under Profit Split, what happens first, before the "residual" is split?',
      options: [
        'Nothing, the full profit is split immediately',
        'Each party is paid a routine return for its ordinary functions first',
        'The transaction is reclassified as a loan',
        'The tax authority sets the split ratio directly',
      ],
      correctIndex: 1,
      explanation: 'Residual analysis pays routine returns first, then splits only the leftover profit by unique contributions.',
    },
    {
      question:
        'A subsidiary that is guaranteed a fixed cost-plus return regardless of whether its R&D project succeeds or fails is generally NOT a strong candidate for Profit Split because:',
      options: [
        'It performed no functions at all',
        'It bore no real financial risk, since its return was fixed either way, so the profit potential logically sits with the party that bore the risk',
        'Profit Split only applies to distributors',
        'R&D can never be split',
      ],
      correctIndex: 1,
      explanation: 'Profit follows risk; a guaranteed return means the subsidiary bore no real risk, so the upside sits with the funder.',
    },
  ],
  'transfer-pricing/5-manufacturing-distribution': [
    {
      question:
        'Which manufacturing profile owns its own inventory but builds strictly to specifications set by the principal, without owning any IP?',
      options: [
        'Toll manufacturer',
        'Contract (routine) manufacturer',
        'Fully-fledged manufacturer',
        'Licensed manufacturer',
      ],
      correctIndex: 1,
      explanation:
        'A contract (routine) manufacturer owns and manages its own inventory and production but builds to the principal’s specifications and owns no IP, the most common in-group factory profile.',
    },
    {
      question: 'A fully-fledged manufacturer is entitled to residual profit (or loss) because:',
      options: [
        'It has the largest factory',
        'It owns its own IP, makes its own strategic decisions, and bears real market and inventory risk',
        'It always has the lowest costs',
        'It is exempt from transfer pricing rules',
      ],
      correctIndex: 1,
      explanation:
        'Residual profit (or loss) is the flip side of carrying real entrepreneurial risk, owning the IP, making the strategic calls, and bearing the market and inventory risk.',
    },
    {
      question:
        'Why might the Berry ratio give a clearer picture than operating margin for a pass-through procurement office?',
      options: [
        'It ignores all costs',
        'It compares profit to the entity’s own operating expenses rather than to a sales figure dominated by pass-through costs the entity doesn’t meaningfully add value to',
        'It always produces a higher number',
        'Tax authorities require it by law in every case',
      ],
      correctIndex: 1,
      explanation:
        'Berry ratio = gross profit ÷ operating expenses, measuring return against the entity’s real operating footprint instead of a pass-through cost or sales figure that dwarfs it.',
    },
    {
      question:
        'When a factory runs below normal capacity due to a demand shock, what happens to its unadjusted fixed cost per unit?',
      options: [
        'It decreases',
        'It increases, since the same fixed costs are spread over fewer units',
        'It stays exactly the same',
        'Fixed costs disappear entirely',
      ],
      correctIndex: 1,
      explanation:
        'Fixed costs stay put while output falls, so each unit absorbs more, inflating unit cost even though efficiency hasn’t changed.',
    },
    {
      question: 'Why does an unadjusted idle capacity cost matter especially for a routine contract manufacturer?',
      options: [
        'It doesn’t matter, routine manufacturers absorb all risk by definition',
        'Letting a demand-side shock inflate its cost base and shrink its margin means it’s silently absorbing market risk it shouldn’t be bearing given its functional profile',
        'It only matters for toll manufacturers',
        'Idle capacity never affects cost per unit',
      ],
      correctIndex: 1,
      explanation:
        'A routine manufacturer is supposed to carry limited market risk; absorbing a demand-side shock contradicts its functional profile, so the cost is adjusted out.',
    },
    {
      question: 'The capacity utilisation adjustment works by:',
      options: [
        'Increasing the factory’s reported sales',
        'Restating the cost base as if the factory had operated at its normal capacity, isolating the extra cost from underuse',
        'Eliminating fixed costs from the analysis entirely',
        'Switching the tested party to the principal instead',
      ],
      correctIndex: 1,
      explanation:
        'It recalculates results at normal utilisation, isolating the unabsorbed fixed cost so the comparison to a normally-operating peer group stays fair.',
    },
  ],
  'transfer-pricing/6-intangibles': [
    {
      question: 'What did the Amazon case ultimately turn on?',
      options: [
        'Whether Amazon owed any tax at all in the US',
        'Which valuation method (Amazon’s CUT-based approach vs. the IRS’s DCF-based approach) was the more reliable way to price a buy-in payment for pre-existing intangibles',
        'Whether Luxembourg is a legitimate place to base a subsidiary',
        'Amazon’s total global revenue',
      ],
      correctIndex: 1,
      explanation:
        'The Tax Court found Amazon’s item-by-item CUT method more reliable than the IRS’s bundled DCF, which it called "arbitrary, capricious, and unreasonable."',
    },
    {
      question: 'Under DEMPE, who is generally entitled to the return generated by an intangible?',
      options: [
        'Whoever’s name is on the patent or trademark registration',
        'Whichever entities actually perform the development, enhancement, maintenance, protection, and exploitation functions',
        'Whichever entity is located in the lowest-tax jurisdiction',
        'The entity with the largest headcount',
      ],
      correctIndex: 1,
      explanation:
        'DEMPE says profit follows the functions that create and sustain the intangible’s value, not the legal title alone.',
    },
    {
      question: 'The relief-from-royalty method values an intangible by asking:',
      options: [
        'How much did it originally cost to create?',
        'What royalty would an independent party have to pay to license a similar asset, if it didn’t already own it?',
        'What is the intangible’s insurance value?',
        'How many patents does the company hold in total?',
      ],
      correctIndex: 1,
      explanation:
        'It estimates the royalty the owner is "relieved" from paying by owning the asset, a common approach for trademarks and brands.',
    },
    {
      question: 'Why did the Amazon and IRS valuations end up roughly fourteen times apart?',
      options: [
        'One side made an arithmetic error',
        'They used fundamentally different valuation approaches (item-by-item CUT vs. a bundled DCF projection) with very different underlying assumptions',
        'Amazon refused to provide any financial data',
        'The court miscalculated the final figure',
      ],
      correctIndex: 1,
      explanation:
        'Two defensible methods with very different assumptions produced $255M vs $3.5B, a vivid illustration of how hard intangible valuation is.',
    },
    {
      question: 'What is the purpose of the hard-to-value intangibles (HTVI) rule?',
      options: [
        'To ban licensing of new technology entirely',
        'To allow tax authorities to use actual outcomes as evidence when a valuation was highly uncertain at the time of the transaction',
        'To fix royalty rates at a flat 5% worldwide',
        'To exempt small companies from intangible valuation rules',
      ],
      correctIndex: 1,
      explanation:
        'For genuinely novel assets, a large later gap between projected and actual outcomes can justify a retroactive adjustment, subject to exceptions.',
    },
    {
      question:
        'A trademark that has generated strong local brand loyalty due to a subsidiary’s decade of independent marketing investment is an example of:',
      options: [
        'A trade intangible only',
        'A potential DEMPE "Enhancement" contribution by the subsidiary, which may deserve compensation beyond a routine royalty',
        'Goodwill that has no value under OECD guidelines',
        'An asset that must always belong 100% to the legal trademark owner',
      ],
      correctIndex: 1,
      explanation:
        'Sustained local marketing can be a genuine Enhancement function, entitling the subsidiary to more than a flat royalty even though it doesn’t own the mark.',
    },
  ],
  'transfer-pricing/7-financing-services': [
    {
      question: 'In the Chevron Australia case, what was the core dispute?',
      options: [
        'Whether Chevron paid any tax anywhere',
        'Whether CAHPL’s interest rate should reflect its realistic position within a strong global group, or be priced as if it were a fully isolated, standalone borrower',
        'Whether the loan was denominated in the correct currency',
        'Whether Chevron Texaco Funding Corporation was a real company',
      ],
      correctIndex: 1,
      explanation:
        'The court sided with the ATO: an unrelated lender would factor in the borrower’s real group context, not price it as an orphaned standalone entity.',
    },
    {
      question: 'What did the Full Federal Court conclude about Chevron’s 9% interest rate?',
      options: [
        'It was too low',
        'It was well above what an arm’s length rate, reflecting CAHPL’s realistic group-context credit position, should have been',
        'It was exactly at the arm’s length rate',
        'Interest rates aren’t subject to transfer pricing rules',
      ],
      correctIndex: 1,
      explanation:
        'The 9% rate was excessive given CAHPL’s true position within a strong global group; the ~$340M tax bill was upheld.',
    },
    {
      question: 'Why shouldn’t a cash pool leader keep the entire synergy benefit created by pooling?',
      options: [
        'It’s illegal to run a cash pool',
        'The benefit was created by the participants’ own cash balances and should generally be shared among them',
        'Cash pools are never allowed under OECD guidance',
        'The pool leader must always operate at a loss',
      ],
      correctIndex: 1,
      explanation:
        'The pool leader is compensated for its routine treasury function; the synergy saving belongs to the participants whose balances created it.',
    },
    {
      question: 'A guarantee fee is generally sized based on:',
      options: [
        'A flat 1% of the loan amount in every case',
        'The measurable reduction in borrowing cost the guarantee actually provides, compared to the subsidiary’s standalone rate',
        'The guarantor’s total annual revenue',
        'The subsidiary’s headcount',
      ],
      correctIndex: 1,
      explanation:
        'Standalone rate minus guaranteed rate gives the interest saving; the fee is typically a portion of that, adjusted for any implicit support that already existed.',
    },
    {
      question: 'Which of these would typically fail the benefit test for intra-group services?',
      options: [
        'A routine, genuinely useful IT helpdesk service used by a subsidiary',
        'A parent’s cost of preparing its own consolidated financial statements for its own shareholders',
        'Payroll processing performed centrally for multiple subsidiaries',
        'A specialised engineering support service a subsidiary would otherwise buy externally',
      ],
      correctIndex: 1,
      explanation:
        'Preparing consolidated accounts for the parent’s own listing is a shareholder activity, done for the parent, not the subsidiary, so it can’t be charged out.',
    },
    {
      question: 'Under the OECD’s simplified approach, low value-adding services can typically be charged at:',
      options: [
        'Cost plus a modest markup, commonly around 5%',
        'A mandatory 25% markup',
        'Whatever the parent company decides unilaterally',
        'No markup is ever allowed',
      ],
      correctIndex: 0,
      explanation:
        'Genuine low value-adding services (payroll, basic IT, HR admin) can use cost plus a ~5% markup without a full benchmarking study.',
    },
  ],
  'transfer-pricing/8-restructurings': [
    {
      question: 'What is a business restructuring, in transfer pricing terms?',
      options: [
        'Any change to a company’s logo or branding',
        'A cross-border reorganisation of functions, assets, or risks between related parties',
        'A purely domestic merger with no cross-border element',
        'A change in a company’s auditor',
      ],
      correctIndex: 1,
      explanation:
        'It’s a cross-border reorganisation of functions, assets, or risks, e.g. converting a full-fledged distributor into a limited-risk one.',
    },
    {
      question:
        'Why did the Facebook case matter for understanding restructurings, even though a US cost-sharing buy-in isn’t technically an "exit tax"?',
      options: [
        'It shows how enormous the value of transferred functions and IP can be, and how contested that valuation can become',
        'It proves the US and Ireland have identical tax rates',
        'It shows restructurings are always tax-free',
        'It had nothing to do with intangibles',
      ],
      correctIndex: 0,
      explanation:
        'IRS $19.9B vs Facebook $6.3B, court ~$7.8B: the same economics as a restructuring, real value leaving a tax base, priced under fierce dispute.',
    },
    {
      question:
        'If a full-fledged distributor is converted into a limited-risk distributor with no compensation, what’s the core transfer pricing concern?',
      options: [
        'Nothing, restructurings are always compensation-free',
        'The distributor gave up real profit potential (a higher expected margin) without being paid for it, similar to how an independent business would expect payment for exiting a valuable arrangement',
        'The parent company automatically owes a criminal penalty',
        'The distributor’s tax rate increases automatically',
      ],
      correctIndex: 1,
      explanation:
        'Giving up functions and risk lowers the distributor’s future benchmark margin; an independent party would expect compensation to walk away from that.',
    },
    {
      question: 'Why do exit taxes exist?',
      options: [
        'To punish companies for expanding internationally',
        'To ensure a country can tax value built up under its jurisdiction before that value (an asset, function, or tax residence) leaves for another country',
        'To replace corporate income tax entirely',
        'To apply only to individuals, never companies',
      ],
      correctIndex: 1,
      explanation:
        'They treat the departure as a deemed sale, so value built up under a country’s jurisdiction doesn’t escape tax through a paper relocation.',
    },
    {
      question: 'What does ATAD Article 5 require of EU member states?',
      options: [
        'Nothing, it’s a non-binding recommendation',
        'That they apply exit taxation in specified circumstances, such as when assets, tax residence, or a permanent establishment’s business relocate out of that state’s jurisdiction',
        'That they eliminate corporate tax on exports',
        'That they only tax individuals who emigrate',
      ],
      correctIndex: 1,
      explanation:
        'ATAD Article 5 obliges member states to apply exit taxation when assets, tax residence, or a PE’s business leave their taxing jurisdiction.',
    },
    {
      question:
        'Why are the transfer pricing compensation question and the exit tax question both relevant to the same restructuring?',
      options: [
        'They’re the same question asked twice',
        'They address the same underlying economic issue (value leaving a jurisdiction) from two different legal angles, transfer pricing focuses on intercompany compensation, exit tax focuses on the origin country’s own taxing right',
        'Only one of them can legally apply at a time',
        'Exit tax replaces the need for any transfer pricing analysis',
      ],
      correctIndex: 1,
      explanation:
        'One asks whether the losing entity was paid arm’s length; the other asks whether the origin country gets to tax the departing value. Both need answering.',
    },
  ],
  'transfer-pricing/9-applied-clinic': [
    {
      question: 'Why was the Polish factory chosen as the tested party in this case?',
      options: [
        'It had the highest revenue',
        'It’s the less complex party; the German parent, holding IP and strategic decisions, has no real independent comparable',
        'Poland has lower tax rates',
        'The factory requested it',
      ],
      correctIndex: 1,
      explanation:
        'You always test the less complex party. The IP-owning principal has no independent comparable, so the routine manufacturer is tested.',
    },
    {
      question: 'Why was the €7,200,000 subcontracted volume separated from the main manufacturing margin test?',
      options: [
        'It was fraudulent',
        'The factory adds essentially no value to it (a pass-through arrangement), so including it would distort the margin test for genuine manufacturing activity',
        'Subcontracting is always illegal in transfer pricing',
        'It was denominated in a different currency',
      ],
      correctIndex: 1,
      explanation:
        'A large pass-through cost that doesn’t reflect the entity’s value-adding effort distorts a cost-based margin, the Berry-ratio logic from Module 5.',
    },
    {
      question: 'What was the purpose of the idle capacity adjustment in Step 3?',
      options: [
        'To increase the factory’s reported revenue',
        'To exclude the extra fixed cost burden caused by running at 78% instead of 100% of normal capacity, which reflects a demand shortfall, not inefficiency',
        'To eliminate all fixed costs from the analysis',
        'To reclassify the factory as a fully-fledged manufacturer',
      ],
      correctIndex: 1,
      explanation:
        'Restating fixed costs at normal capacity isolates the €1,980,000 idle-capacity cost, excluded so a demand shock doesn’t distort the routine margin.',
    },
    {
      question: 'Why were the insurance settlement gain and loan interest expense excluded from the operating profit calculation?',
      options: [
        'They were too small to matter',
        'They’re non-operational items that don’t reflect the factory’s actual manufacturing performance',
        'Insurance proceeds are always taxable',
        'Interest expense is never allowed as a deduction',
      ],
      correctIndex: 1,
      explanation:
        'A one-off insurance gain and a financial interest item aren’t operating results; both are stripped out before testing the manufacturing margin.',
    },
    {
      question:
        'The factory’s final cleaned Return on Total Costs of 9.2%, compared to a benchmark range of 6.1%–9.2%, means:',
      options: [
        'An adjustment is definitely required',
        'The result falls at the top of, but still inside, the accepted range, so no adjustment is needed',
        'The factory should be reclassified as a toll manufacturer',
        'The benchmarking study must be discarded',
      ],
      correctIndex: 1,
      explanation:
        'At Q3 but inside the interquartile range, the result is arm’s length; no correction is required for the core manufacturing function.',
    },
  ],
  'transfer-pricing/10-applied-clinic-distribution': [
    {
      question: 'Why couldn’t Arlo Roasters USA simply be treated as one routine, blended distributor?',
      options: [
        'It’s illegal to blend revenue streams',
        'Its wholesale and e-commerce functions have genuinely different risk and value-creation profiles, one routine, one built on a self-funded, valuable intangible',
        'US entities can never be tested with TNMM',
        'The parent company forbade it',
      ],
      correctIndex: 1,
      explanation:
        'A blended margin would hide a routine, arm’s length wholesale function beneath a separate, unique self-built intangible, leading to the wrong diagnosis.',
    },
    {
      question: 'What did splitting the financials by channel reveal that the blended, multi-year "loss" picture had obscured?',
      options: [
        'That the whole entity was underpriced',
        'That the wholesale function was arm’s length all along, and the apparent loss mostly traced to the e-commerce channel’s investment phase',
        'That Italy owed no compensation of any kind',
        'That the Brazilian subsidiary was the real problem',
      ],
      correctIndex: 1,
      explanation:
        'Wholesale earned 3.6% (inside its benchmark); the losses came from the e-commerce channel’s heavy upfront investment, not underpricing.',
    },
    {
      question: 'Why was the e-commerce channel not simply corrected upward using a standard TNMM benchmark?',
      options: [
        'TNMM cannot be used for e-commerce under any circumstances',
        'No meaningful independent comparable exists for a subsidiary’s self-built, unique digital brand and customer intangible, pointing toward Profit Split instead',
        'E-commerce revenue is never included in transfer pricing analysis',
        'The channel had no revenue at all',
      ],
      correctIndex: 1,
      explanation:
        'A self-built, unique intangible has no routine comparable; the defensible route is a Profit Split, not forcing a TNMM correction on a loss.',
    },
    {
      question: 'What distinguishes the US e-commerce channel from the Canadian one in the final exercise?',
      options: [
        'Nothing, they should be treated identically',
        'The US channel reflects six years of independent, self-funded investment and a real value contribution; the Canadian one is new, template-based, and has no independent contribution yet',
        'Canada has different currency rules',
        'The US channel is smaller',
      ],
      correctIndex: 1,
      explanation:
        'Only the US entity built a genuine, self-funded intangible; the new, template-based Canadian channel is still a routine function testable under TNMM.',
    },
    {
      question: 'What’s the broader lesson of this case for diagnosing a loss-making distributor?',
      options: [
        'All losses automatically mean underpricing requiring a TNMM correction',
        'A loss can have more than one cause, and different functions within the same entity may need to be separated and diagnosed differently before concluding what, if anything, needs fixing',
        'Losses are always acceptable and require no analysis',
        'Only the parent company’s perspective matters',
      ],
      correctIndex: 1,
      explanation:
        'Run the full five-step process and split functions before concluding; jumping from "this looks unusual" to "therefore adjust" is how analyses go wrong.',
    },
  ],
  'transfer-pricing/11-luxembourg': [
    {
      question: 'What are Articles 56 and 56bis of Luxembourg’s LITL?',
      options: [
        'VAT regulations',
        'The provisions codifying the arm’s length principle into Luxembourg domestic tax law, aligned with OECD guidelines',
        'Rules governing Luxembourg company incorporation only',
        'A treaty between Luxembourg and Ireland',
      ],
      correctIndex: 1,
      explanation:
        'Articles 56/56bis LITL bring the arm’s length principle into Luxembourg domestic law, the local parallel to Article 9 of the OECD Model.',
    },
    {
      question:
        'Under Luxembourg’s intra-group financing guidance, what determines whether a financing company can rely on the roughly 2% routine benchmark?',
      options: [
        'The size of the loan alone',
        'Whether it genuinely bears credit risk (like a real intra-group bank) or functions as a routine administrative intermediary with no real risk exposure',
        'Which currency the loan is denominated in',
        'Whether the company has more than ten employees',
      ],
      correctIndex: 1,
      explanation:
        'The 2% routine benchmark is for administrative intermediaries; a genuine risk-bearing financier needs a full TP study reflecting its equity at risk.',
    },
    {
      question: 'What does "equity at risk" refer to in this context?',
      options: [
        'The company’s total revenue',
        'The portion of a financing company’s capital genuinely exposed to credit risk, central to determining its arm’s length remuneration',
        'A company’s stock market valuation',
        'The interest rate charged on a loan',
      ],
      correctIndex: 1,
      explanation:
        'Remuneration follows the credit risk the entity genuinely bears, not the size of the loan passing through it.',
    },
    {
      question: 'What is an Advance Pricing Agreement (APA)?',
      options: [
        'A loan agreement between two banks',
        'A formal agreement with the tax administration that pre-approves a transfer pricing methodology before the relevant transactions occur',
        'A penalty imposed for non-compliance',
        'A type of shareholders’ agreement',
      ],
      correctIndex: 1,
      explanation:
        'An APA secures certainty upfront on complex or high-value arrangements, reducing the risk of a dispute after the fact.',
    },
    {
      question:
        'In the Meridian Capital worked example, why wasn’t the pure 2% routine benchmark considered sufficient on its own?',
      options: [
        'Because 2% is never used in Luxembourg',
        'Because Meridian Capital performs a genuine, if limited, monitoring function beyond a bare pass-through role, which the routine benchmark alone doesn’t capture',
        'Because the loan was denominated in a foreign currency',
        'Because German headquarters forbade using it',
      ],
      correctIndex: 1,
      explanation:
        'The base 2% floor is supplemented by a modest, separately-benchmarked fee for the real monitoring/scorecard function, still short of a full bank.',
    },
    {
      question:
        'What connects both the McDonald’s and Amazon cases discussed in this module to Luxembourg specifically?',
      options: [
        'Both involved illegal conduct by the Luxembourg tax administration',
        'Both involved genuine cross-border structures, financing and IP-holding respectively, routed through Luxembourg entities, without either case finding wrongdoing by Luxembourg’s own tax authority',
        'Both companies relocated their headquarters to Luxembourg permanently',
        'Neither case had any connection to Luxembourg',
      ],
      correctIndex: 1,
      explanation:
        'Both show why so much high-profile TP activity runs through Luxembourg, neither found fault with Luxembourg’s own administration.',
    },
  ],
};
