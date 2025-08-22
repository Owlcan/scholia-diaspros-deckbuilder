<div align="center">

# Diaper School TCG – Core Rules v1.0

_Living rules: this document is authoritative for current play; card text overrides rules._

</div>

**Last Updated:** 2025-08-22  
**Version Tag:** v1.0.1 (Expanded clarifications – no system changes made.)

---

---

## Quick Start (10 Steps)
1. Shuffle a legal deck (≥40 cards; respect copy limits; unlimited Boosters). Set your SV (life) to 10.
2. Decide first player (coin flip). Draw 7 cards.
3. (Optional) Take one mulligan to 6 (Section 13) if your opener lacks resources/plays.
4. On your turn: Untap → play up to 5 HP worth of Boosters → deploy units / cast spells → (optionally) attack → second main → end.
5. You may not tap a newly entered Monster (or Student that is also a Monster) the turn it enters (it can still block and have static/triggered effects).
6. Track resources by tapping Boosters / paying costs; illegal plays are rewound (Section 28).
7. Combat: Declare attackers, opponents declare blockers (Boosters can block), assign & resolve damage simultaneously (Section 10).
8. Destroyed cards go to The Pail. Tokens cease if they ever change zone (unless stated otherwise).
9. Deck‑out (attempt to draw with 0 cards) = immediate loss.
10. First to reduce each opponent to 0 SV wins (last standing in multiplayer).

---

## Table of Contents
1. Objective & Victory
2. Core Components
3. Card Types
4. Deck Construction
5. Setup Sequence
6. Turn Structure (Phases)  
	6.1 Detailed Phase Windows  
	6.2 Example Full Turn Transcript
7. Priority & Instants
8. Playing Cards & Costs
9. Booster Rules (Energy Economy)  
	9.1 Booster Play Examples
10. Combat  
	10.1 Combat Examples  
	10.2 Common Combat Edge Cases
11. Tapping / Flipping / Rotation / Stacking
12. Zones
13. Mulligan Procedure
14. Hand Size
15. Tokens & Counters (Expanded)
16. Life (SV)
17. Art Variants
18. Digital Board & Deck Tools
19. Keyboard / Interaction Quick Reference
20. Keywords (Implemented / Planned)
21. Multiplayer
22. Combat Quick Reference
23. Glossary
24. Design & Balance Notes
25. Open Design & Future Clarifications
26. Change Log
27. Starter Deck Appendix
28. Rewinds, Illegal Actions & Shortcuts (NEW)
29. Card Anatomy & Layout (NEW)
30. Cost & Energy Symbol Conventions (Preview) (NEW)
31. Timing Windows Summary (NEW) 
32. Common Questions (FAQ) (NEW)
33. Advanced / Optional House Rules (NEW)
34. Accessibility & UI Tips (NEW)
35. Versioning & Reporting Ambiguities (NEW)

---

## 1. Objective & Victory
Reduce each opponent’s Summoner Vitality (SV) from 10 to 0. Your SV starts at 10. In multiplayer (2–4 players) the last player with SV > 0 wins.  
Draw / special outcomes:
1. Deck‑Out Loss: If you would draw and your deck is empty, you immediately lose.
2. Simultaneous SV 0: If multiple players hit 0 SV from the same event, those players draw (remaining players continue, if any). If only the last two players reach 0 simultaneously the game is a draw.
3. Alternate win/loss effects (future) override the above when printed.

---

## 2. Core Components (Digital Implementation)
- Deck builder & card database
- Face‑down deck pile (stack abstraction)
- Board: draggable, rotatable, flippable, tappable cards
- Boosters (energy + defensive utility)
- Students / Monsters / Spells / Items / Artifacts / Environment / Instants
- Custom placeable named zones (persist via board save)
- The Pail (discard pile)
- Tokens / counters
- Coin flipper (random resolution aid)
- Life counter (SV)
- Export / import (board + decks + PNG proxy sheet)

---

## 3. Card Types (Functional Summary)
| Type | Rule Role |
|------|-----------|
| Booster (Energy) | Resource. You may play up to 5 HP worth of Boosters per turn (see Section 9). Can defend; absorbs damage up to its HP. Has HP (and sometimes abilities). Unlimited deck copies. |
| Student | Summon / unit. Some cards may also be Monsters; treat overlapping types cumulatively. |
| Monster | Combat unit with ATK/HP; subject to first‑turn tap restriction. |
| Spell | One‑shot effect; resolves then goes to The Pail unless it has Persistent. |
| Instant | Like a Spell but may be played whenever you have priority. |
| Item / Artifact | Ongoing / equipment / utility. Remains until removed. |
| Environment | Global/static effect; only one of each name per controller if future uniqueness is adopted (not yet enforced). |
| Boss | Powerful subtype; deck limit 2 copies (no extra in‑play rule yet). |
| Legendary | Deck construction limit 1 copy per player (opponents may also have their own). No battlefield uniqueness yet. |
| Token | Generated marker; if a token leaves play to any zone other than The Pail it usually ceases to exist (unless a card states otherwise). |

Card text always overrides base rules where a conflict exists.

---

## 4. Deck Construction
Mandatory rules:
- Minimum deck size: 40 cards.
- Copy limits: Normal (non‑Booster, non‑Boss, non‑Legendary) = 4; Boss = 2; Legendary = 1; Boosters = unlimited (must include at least 1; recommended substantially more).
- One Legendary limit is per player’s deck, not global.
- No sideboard rules defined (ignored for v1.0).

Recommended early balance targets:
- 50–55 card early test lists with 20–25 Boosters (≈40–50%).
- 8–12 low‑cost early plays to avoid idle openings.
- Avoid stuffing many different Legendaries; 1–2 total distinct Legendary cards keeps variance healthy.

Re‑evaluate Booster count:  
If you miss needed energy plays on turns 2–3 in >30% of test games, add 2 Boosters; if you float 3+ unused for ≥3 consecutive turns often, cut 2.

---

## 5. Setup Sequence
1. Each player presents a legal, fully randomized (shuffled) deck face‑down.
2. Determine first player (coin flip or agreed method).
3. Each player draws 7 cards.
4. Mulligan option (once only, simultaneous): shuffle hand into deck, draw exactly 6; keep (see Section 13).
5. Set SV counters to 10.
6. Place deck pile; create any desired custom zones now (optional).  
7. Game begins with the first player’s Start Phase.

---

## 6. Turn Structure (Phases)
Unless card text states otherwise, each turn proceeds:
1. Start Phase
	- Untap all your tapped cards (unless an effect prevents it).
	- Resolve "At start" / upkeep style triggers.
2. Main Phase
	- Play Boosters (respect Booster Play Limit, Section 9).
	- Summon Students / Monsters / cast Spells, Items, Artifacts, Environment, Bosses, Legendaries (normal timing). Instants may also be played here.
	- Activate abilities (tap / pay costs) respecting first‑turn tap restriction.
3. Combat Phase (Section 10)
4. Second Main Phase (optional) – identical to Main Phase (currently minimal differences; may be skipped if no actions).
5. End Phase
	- Resolve "end of turn" triggers.
	- No maximum hand size cleanup (Section 14).

You may summon Students / Monsters on turn 1.  
First‑Turn Tap Restriction: A Monster (or Student that is also a Monster) can’t tap for costs or abilities the turn it enters play. It may still block and its static/triggered abilities function.

### 6.1 Detailed Phase Windows
Each numbered window below is a possible priority pass point:
1. Start Phase begins → (A) resolve “At start” triggers (active player chooses order among their simultaneous triggers) → priority.
2. After each spell/ability you play in Main Phase resolves → priority.
3. Entering Combat Phase: pre‑combat priority (last chance to cast Instants before attackers are declared).
4. Declare Attackers → (B) any "After attackers declared" triggers → priority (defender may respond before blockers chosen).
5. Declare Blockers → (C) any "After blockers" triggers → priority.
6. Damage Assignment (no priority mid‑assignment) → Damage is locked in → Damage Resolves → (D) "After damage" triggers → priority.
7. Post‑Combat Main (identical timing to Main).
8. End Phase begins → "At end of turn" triggers → priority → when all pass consecutively the turn ends.

Shortcut Principle: If both players verbally/implicitly pass through a series of empty priority windows, the game advances.

### 6.2 Example Full Turn Transcript
Player A (turn starts): Untaps, resolves an upkeep trigger (draw 1), passes priority. Player B passes.
Main: A plays a 2 HP Booster (HP tally 2/5), plays a 3 HP Booster (5/5). Attempts a third (illegal – exceeds 5 HP); rewinds (Section 28). A summons a Monster; it has “Tap: Deal 1 damage” but cannot tap this turn (first‑turn tap restriction). A passes. B casts an Instant removing another earlier Student. Priority back to A who passes.
Combat: A declares the new Monster as an attacker. Priority to B: B taps a Booster for an Instant buff on their blocker, then declares a blocker. Damage: Attacker 3 ATK vs blocker 2 HP → blocker destroyed; attacker survives with no persistent damage. Post‑combat Main: A casts a Spell. End: "At end of turn" trigger exiles a temporary token. Turn ends.

---

## 7. Priority & Instants (Timing Model)
Simplified priority system:
1. Active player receives priority at appropriate windows (after a spell/ability resolves or a phase/step begins).
2. Active player may act (cast a spell, play an ability) then passes priority.
3. Non‑active player may respond with Instants / Instant‑speed abilities.
4. When all players pass consecutively with nothing on the conceptual stack, the game advances (or the top effect resolves if there is one).  
Only Instants (and abilities explicitly granted Instant timing) may be used during an opponent’s turn or in response windows.

The “stack” is conceptual in v1.0; resolution is last‑in first‑out (LIFO).

---

## 8. Playing Cards & Costs
- To play a card: Announce → meet costs (tap Boosters / other requirements) → place onto the board (or into The Pail if it’s a resolving one‑shot without persistence) → resolve effects.
- If a cost cannot be fully paid, the play attempt is illegal (rewind; re‑tap resources if needed).
- Boosters usually provide energy by tapping; exact cost symbology will be formalized in future templating.

---

## 9. Booster Rules (Energy Economy)
- Per Turn Play Limit: You may play (put onto the battlefield) Boosters totaling up to 5 printed HP per turn. Example: You may play three Boosters with HP 2, 2, and 1 (total 5). You could not also play an additional HP 1 Booster that same turn.
- Boosters enter untapped unless card text says otherwise.
- Tapping a Booster: Represents allocating its energy that turn (or paying its tap ability). Tapped Boosters usually can’t be re‑tapped for further energy without a specific untap effect.
- Defensive Role: During combat you may assign a Booster as a blocker. It can absorb damage up to its HP; excess damage beyond its HP is lost (no spillover) unless a future keyword changes this.
- Boosters retain damage only until combat ends; damage is cleared if the Booster leaves play.

### 9.1 Booster Play Examples
| Example | Boosters Played | Total HP Consumed | Legal? | Notes |
|---------|-----------------|-------------------|--------|-------|
| A plays HP2 + HP2 + HP1 | 3 | 5 | ✔ | Exactly at limit. |
| A plays HP3 + HP3 | 2 | 6 | ✖ | Exceeds; must rewind last. |
| A plays HP4 then HP1 then attempts HP1 | 3 (attempt) | 6 (attempt) | ✖ | Third Booster illegal; rewind that play only. |
| A plays HP5 single Booster | 1 | 5 | ✔ | Consumes entire allowance. |
| A plays HP2 + HP1, later casts effect “Play an additional 2 HP of Boosters this turn” (future) then plays HP3 | 3 | 6 | Depends | Extra allowance effect needed to exceed 5. |

Tracking Tip: In digital play you can verbally / chat log HP spent; physically, place a marker to track remaining allowance.

---

## 10. Combat
Sequence:
1. Declare Attackers: Active player chooses which untapped eligible Monsters/Students/other units attack. Tapping to attack only if a future rule/card requires; base game abstracts attack declaration without mandatory tap unless a card or convention introduces it. (If you adopt “attacking taps” variant, tapping occurs here.)
2. Declare Blockers: Defending player declares blockers (Students / Monsters / eligible units) and may assign Boosters to block.
3. Damage Assignment: For each attacking unit with multiple blockers, attacker orders blockers and assigns damage in that order (lethal-first principle only matters once “overrun” type mechanics exist).
4. Simultaneous Damage: All combat damage resolves simultaneously.
5. Destruction: Units / Boosters with damage ≥ HP are destroyed (placed into The Pail) simultaneously after damage.
6. Post‑Combat Main: (This is the Second Main Phase described earlier.)

Key Combat Rules:
- Damage does NOT carry over between multiple blockers.
- Unblocked attackers deal full ATK to the defending player’s SV.
- Damage tokens (if used) are for tracking within the current combat sequence only (unless a card grants lingering wounds).
- Damage is cleared from all surviving units at the end of combat.
- Leaving Play Reset: If a damaged card leaves the battlefield (hand / deck / exile / other), it returns with no memory of previous damage.

### 10.1 Combat Examples
**Single Block:** Attacker 3 ATK vs Blocker 2 HP → Blocker destroyed; no damage to SV.

**Multiple Blockers (No Overflow):** Attacker 5 ATK blocked by Blocker A (2 HP) and Blocker B (3 HP). Attacker assigns 2 damage to A (destroyed) and 3 to B (destroyed). All damage simultaneous; attacker survives undamaged (no carry over beyond assigned amounts). If attacker had 4 ATK, assign 2 to A and 2 to B → A destroyed, B survives with 1 HP remaining.

**Booster Block:** Booster (HP2, 0 ATK) blocks a 4 ATK Monster. Booster destroyed; no SV damage because blocked.

**Unblocked:** 4 ATK Monster unblocked → opponent loses 4 SV.

ASCII Diagram (A = Attacker; B1/B2 = Blockers)
```
	 A(5 ATK)
		|\
		| \
	B1(2) B2(3)
```
Assignment: 2 → B1, 3 → B2.

### 10.2 Common Combat Edge Cases
1. First‑turn Monster can block? ✔ Yes (restriction only prevents tapping its own abilities that turn).
2. Booster with temporary +ATK buff deals damage back equal to new ATK if effect grants ATK.
3. Simultaneous death: If two attacking Monsters trade lethal with single blockers, they destroy each other simultaneously.
4. Effect granting “Unblockable” after blockers declared: Too late – blockers remain; future evasion only affects new block declarations.
5. Removing attacker before damage: That attacker deals no damage; its assigned damage is lost.

Quick Flow: Attack → Block → Assign → Resolve → Cleanup.

---

## 11. Tapping, Flipping, Rotation & Stacking (Interface States)
- Tap: Rotate 90° to indicate usage/energy spent. Untaps in your Start Phase.
- Flip: Represent hidden/alternate faces (future design space). No default mechanical change unless a card defines one.
- Rotate (non‑90° decorative spins) has no rules meaning (UI only).
- Stack / Unstack: Visual pile management; identity of each card remains separate.

---

## 12. Zones
Implemented / Recognized in v1.0:
- Library / Deck: Face‑down draw pile.
- Battlefield / Board: All in‑play cards and tokens.
- The Pail: Discard pile (face‑up unless effect states otherwise).
- Exile (planned): Not yet formally implemented; treat any “exile” text as “temporarily out of play” until returned; it loses damage counters.
- Custom Named Zones: Player‑placed layout markers; purely organizational (no inherent rules unless card text references a zone name). Included in board saves.

Zone Movement Principles:
- Moving a card to hand/deck/exile clears damage and temporary modifiers unless a card states persistence.
- Tokens leaving the battlefield to hand/deck/exile cease to exist (cannot later return) unless an exception is printed.

Auto‑Stack Behavior (Digital): Boosters stack with partial vertical overlap; other cards offset slightly for readability. Full overlap does not merge identities.

---

## 13. Mulligan Procedure
After initial 7‑card draws, each player may (simultaneously) take one mulligan: shuffle entire hand into deck, draw exactly 6 new cards, and keep. No further mulligans.

---

## 14. Hand Size
No maximum hand size rule exists in v1.0. (Physical practicality only.)

---

## 15. Tokens & Counters
Tokens track: temporary attack/HP buffs, status markers, or (within a combat) damage. You may use custom colored tokens provided by the UI. Remove all damage tokens at end of combat unless a card explicitly states damage persists.

Expanded Usage:
- Double‑click number overlay (digital) can represent cumulative counters (+1/+1 style) – agree notation before play.
- Numeric overlay vs separate tokens: pick one method per game to avoid confusion.
- Token Identity: Only what is explicitly defined on creation (name, stats, abilities). If ambiguous, default to a vanilla token with just indicated stat markers.
- Stacked Tokens: Visual overlap does not merge; keep readable.

---

## 16. Life (Summoner Vitality)
Start at 10. When reduced to 0 you lose (subject to simultaneous draw rule). Digital counter: plus/minus adjust; double‑click resets to 10.

---

## 17. Art Variants
Before placing/playing a card you may cycle artwork variants. The currently selected variant is used for: board representation, deck addition, export PNG proxy, and saved board state.

---

## 18. Digital Board & Deck Management Tools
- Collect Cards to Deck: Gathers loose board cards (not already in deck pile) and adds them on top of existing deck (does not overwrite). Then you may shuffle.
- Shuffle: Randomizes hidden order of deck pile.
- Deal: Moves specified number of top cards to board (treat as your hand or field as appropriate to testing). These cards are regular board cards and can later be collected.
- Return All to Deck: Returns dealt cards outside protected zones to the top (optionally shuffle afterward).
- Peek Top: Momentarily show top card(s) (use responsibly in competitive contexts—future hidden info enforcement may change this).
- Export Board: Saves JSON with card IDs, positions, rotations, taps, zones, variant selection.
- Import Board: Restores prior state (requires same card set available). Missing IDs are skipped.

---

## 19. Keyboard / Interaction Quick Reference
| Action | Input |
|--------|-------|
| Multi‑select | Shift + Click or drag‑select rectangle |
| Rotate | Context menu / hotkey |
| Flip | Context menu / hotkey |
| Stack / Unstack | Context menu |
| Tap / Untap | Tap command / hotkey (rotates 90°) |
| Move | Drag; snaps into zones |
| Coin Flip | Use coin widget |

---

## 20. Keywords (Current Implemented Meanings)
- Booster / Energy: Resource card with HP; subject to play limit; can block.
- Unblockable: Can’t be blocked.
- Flying: Can only be blocked by Flying (future Reach will allow non‑Flying to block).
- Legendary: Deck construction limit 1 per player (no battlefield uniqueness yet).
- Boss: Deck construction limit 2; no extra rules yet.
- Instant: May be played whenever you have priority.
- Persistent: Card remains on battlefield after resolving instead of going to The Pail.
- Tap / Untap: State changes indicating usage / refresh.

Planned / Not Yet Implemented Keywords (examples): Reach, Overrun/Trample, Vigilance, Hexproof/Shroud, Lifegain variants, Transform.

---

## 21. Multiplayer (2–4 Players)
- Turn order: Clockwise from randomly selected first player.
- Targeting: Spells/effects target a single opponent unless card text says “each opponent".
- Victory: Last player with SV > 0. Simultaneous multi‑player elimination resolves per Objective & Victory rules.
- Legendary copies: Each deck may include 1 of a Legendary—even if opponents also use that card.

---

## 22. Combat Quick Reference Card
1. Attackers → 2. Blockers → 3. Assign → 4. Resolve → 5. Destroy → 6. Surviving damage cleared (and tokens removed unless persistent).  
Unblocked damage → SV. Damage doesn’t carry between blockers; leaves when the unit leaves play.

---

## 23. Glossary
- The Pail: Discard pile.
- Board / Battlefield: In‑play area for cards.
- Stack (conceptual): Last‑in first‑out pending effects structure.
- Priority: Opportunity to act (pass back and forth to move game forward).
- Lethal Damage: Damage ≥ current HP of a unit.
- Exile (future): Out‑of‑game zone separate from The Pail.
- Zone (Custom): Player‑defined organizational region with no inherent rules.
- SV: Summoner Vitality (life total).

---

## 24. Design & Balance Notes
Focus areas for early testing:
1. Booster Play Limit (5 HP per turn) pacing versus deck sizes.
2. First‑turn tap restriction fairness (does it sufficiently curb explosive openings?).
3. Density of Instants: Too few slows interaction; too many stalls progress.
4. Legendary / Boss impact frequency given low copy limits.
5. Board clarity with custom zones—may later formalize colored zone templates.

Tuning Guidance Recap:
- Start ~50 cards, 20–25 Boosters.
- Maintain a coherent threat curve (don’t overload high HP cost cards).
- Preserve removal / interaction (Instants / Spells) to avoid board lock states.

---

## 25. Open Design & Future Clarifications
Already Locked for v1.0: Mulligan (one to 6), no max hand size, deck limits (40+, 4 / 2 Boss / 1 Legendary / ∞ Boosters), deck‑out loss, booster play cap (5 HP per turn), first‑turn summon allowed, first‑turn tap restriction, damage clearing rules, multiplayer support.

Outstanding:
1. Legendary In‑Play Uniqueness (do duplicates self‑sacrifice?).
2. Formal Exile zone + return interactions.
3. Overrun / Reach / Vigilance / Hexproof keyword set.
4. Sideboard & match structure (best‑of‑X, sideboard size).
5. Alternate win conditions (poison / objective systems).
6. Energy color diversification & fixing.
7. Transformation / leveling framework.
8. Standardized token stat templates.
9. Booster ramp effects that skirt the 5 HP limit (allow? restrict?).
10. UI stack visualization for complex Instant chains.

Priority Suggestion Order: (1) Legendary uniqueness, (2) Exile & transformation scaffolding, (3) Keyword expansion, (4) Sideboard / match, (5) Alternate win cons.

---

## 26. Change Log
v1.0 (2025-08-11): First formal structured release. Consolidated sections, added Booster play cap to core rules, clarified combat & damage reset, reorganized timing, added multiplayer + glossary, removed duplicates.

---

_Questions or ambiguities? Track them under Section 25 before altering core sections._

---

## 27. Starter Deck Appendix (Prebuilts & Pilot Tips)
Three 55‑card prebuilt decks are provided for onboarding and balanced early testing. Each list is legal under Section 4. You can load them via the deck buttons in the app. Card text overrides any shorthand descriptions here.

### 27.1 Mono‑Universal — “Academy Tempo” (55)
Playstyle: Low‑curve student swarm plus light control/tap pressure and incremental artifact value. Seeks early board presence, then snowballs tempo with selective disruption and soft locks.

Core Game Plan:
- Turns 1–2: Deploy inexpensive Students; prioritize multi‑body pressure over holding interaction unless facing a faster deck.
- Midgame: Use tap / pacification / soft removal spells to maintain tempo while converting artifacts into incremental advantage.
- Closing: Leverage sustained board plus buff / form‑shifts for inevitability.

Baseline List (Original Concept Build):
- Creatures (24): student_001×3, student_003×2, student_004×2, student_037×2, student_038×2, student_040×2, student_053×3, student_054×2, monster_031×2, monster_026×2, monster_010×1, monster_032×1
- Spells (11): spell_012×3, spell_002×2, spell_003, spell_014, spell_015, spell_016, spell_021, spell_017
- Items/Artifacts (6): item_008×2, item_010, item_009, artifact_014, artifact_011
- Boosters (14): booster_001×4, booster_006×3, booster_012×3, booster_013×2, booster_011×2

In‑App Modified Variant (Deck Button) Differences: Reduced creature count to 18 and increased boosters to 20 for testing resource curve stability (adds booster_002 etc.). Use whichever version suits testing goals.

Mulligan Guidance:
- Keep hands with: ≥2 Boosters, ≥2 early Students, and at least one interaction or scaling piece.
- Ship hands with: 0 or 1 Booster, or all late, or no proactive 1–2 cost Students.

Sequencing Tips:
- Deploy broad board first; hold single‑target control until it breaks opposing tempo.
- Avoid overcommitting into mass neutralization; stagger artifact deployment.

Customization Hooks:
- Need more inevitability: Add another late payoff Student / Monster; trim a midrange body.
- Flooding: Cut 1–2 Boosters, add recursion or card selection.
- Stumbling on costs: Revert to the higher booster count variant.

### 27.2 Shadergy + Universal — “Darkling Control” (55)
Playstyle: Attrition & tempo denial. Trades early, constricts opponent’s hand/board, then stabilizes behind resilient midgame Darklings and incremental drain or shadow mobility.

List:
- Creatures (17): monster_001×3, monster_002, monster_003, monster_004×2, monster_016×2, monster_017, monster_018, monster_047×2, monster_048×2, monster_013, student_103
- Spells (11): spell_027×2, spell_028×2, spell_029×2, spell_033, spell_034, spell_011, spell_021, spell_010
- Items/Artifacts (6): item_015×2, item_016×2, item_018, item_022
- Boosters (21): booster_008×6, booster_009×5, booster_010×2, booster_001×4, booster_012×3, booster_013

Mulligan Guidance:
- Prioritize 2–3 Boosters (mixed Shadow/Universal) + at least one early stabilizer (cheap Darkling or tempo spell).
- Avoid hands that are: Spell‑heavy with no early creature OR booster‑light (≤1) OR top‑heavy (multiple 3+ cost without support).

Play Pattern Tips:
- Conserve premium disruption; use cheaper shadow mobility / tap effects to bridge into midgame bodies.
- Sequence drain / jaunt effects to break up double blocks or reset your own exhausted units.
- Booster Density: 21 boosters means you can afford to pitch marginal openers knowing refuel probability is high.

Customization Hooks:
- Want faster clock: Replace a control spell and a high‑end booster with 2 aggressive midcurve Darklings.
- Struggling vs swarm: Add a second copy of a mass pacification / AOE if printed; trim a single-target trick.
- Too flood‑prone: Drop 1–2 Advanced/Shadow boosters for another resilient creature + utility spell.

### 27.3 Pyro + Cryo — “Elemental Flux” (55)
Playstyle: Pyro aggression & chip burn backed by selective Cryo tempo and universal stabilizers. Leverages efficient removal to keep lanes open for pressure while splashing Cryo tech (freeze / delay) to reclaim initiative.

List:
- Creatures (17): student_028×3, student_029×2, student_008×2, student_036, student_050, student_035×2, student_044, student_060, student_101, monster_044, monster_010, student_001
- Spells (11): spell_018×3, spell_013×2, spell_020×2, spell_010, spell_021, spell_015, spell_008
- Items/Artifacts (5): artifact_014, item_009, item_010, artifact_017, item_002
- Boosters (22): booster_004×6, booster_020×3, booster_003×5, booster_021×2, booster_001×3, booster_012×3

Mulligan Guidance:
- Keep if: ≥2 Boosters (ideally at least 1 Pyro + 1 Cryo/universal), 1 early attacker, 1 burn or tempo spell.
- Consider mulligan if: No early pressure OR all boosters and high end OR color skew (e.g., all Cryo spells but no Cryo boosters) once color costs are formalized.

Sequencing Tips:
- Lead with Pyro pressure; reserve Cryo tech to reset opposing stabilizers or protect lethal lines.
- Avoid firing all burn at face early—preserve removal for blockers that wall your 2–3 ATK curve.
- Use universal boosters to smooth multi‑color requirements; don’t overcut them in customization.

Customization Hooks:
- Need more inevitability: Add a late “finisher” monster; cut a midrange attacker.
- Facing control: Add recursive threat or uncounterable style effect (when available) in place of a utility item.
- Too slow to stabilize vs rush: Replace one high HP Pyro booster with an additional cheap removal spell.

### 27.4 Choosing a First Deck
- Want to learn sequencing & resource curve: Start with Academy Tempo (for basic board development). 
- Prefer reactive attrition: Darkling Control.
- Prefer proactive pressure plus tactical burn: Elemental Flux.

### 27.5 General Upgrade Path Philosophy
1. Shore up Consistency: Replace underperforming midcurve bodies with card selection or flexible interaction once printed.
2. Introduce Specialized Threats: Add 1–2 tech cards (graveyard hate, artifact suppression, evasive finisher) for emergent meta.
3. Tune Resource Base: Adjust Booster count after at least 5 logged games (see Section 4 heuristics).
4. Respect Copy Limits: Always re‑validate deck legality after modifications (Section 4).

### 27.6 Tracking Changes
When you evolve a starter, snapshot the list (Export Deck) so you can A/B test revisions. Keep a short changelog: “-1 booster_012, +1 spell_0XX (removal)” to understand performance swings.

---

## 28. Rewinds, Illegal Actions & Shortcuts (NEW)
**Illegal Play Detected Immediately:** Rewind to the last legal game state. Reveal of hidden info (like drawn card after an illegal Booster play) stands only if both players agree; otherwise reshuffle the revealed card into the unknown zone if reconstructable.

**Common Rewinds:**
- Exceeding 5 HP Booster play limit → Undo last Booster only.
- Attempting to tap a summoning‑sick Monster → Untap it; reverse any cost payment; restore priority.
- Paying cost partially then realizing insufficient Boosters → Reverse the play; untap used Boosters.

**Out‑of‑Order Sequencing (OOS):** If a player takes a minor action retroactively that does not change choices made with imperfect information (e.g., “I forgot to untap this Booster at start”), allow correction if within the same turn and no new hidden info was gained.

**Shortcuts:** Statements like “Go to combat?” imply offering priority at pre‑combat main end.

## 29. Card Anatomy & Layout (NEW)
While templating is evolving, a typical card data model includes:
```
Name | Type Line (e.g., Student – Cat) | Tier (Legendary / Boss) | Cost (energy symbols)
ATK / HP (if a unit) | Ability Block(s) | Flavor (optional) | Set / ID | Art Credit
```
Rules Relevance: Only name, types, cost, tier, stats, and rules text matter. Art, flavor, and set ID are non-functional.

## 30. Cost & Energy Symbol Conventions (Preview) (NEW)
Until full symbol sprites finalize, costs are text (e.g., "2 Pyro, 1 Universal"). Interpret order irrelevantly. Future icons will map: Universal (U), Pyro (P), Cryo (C), Geo (G), Hydro (H), Shadow (S). Hybrid/multi-color & variable (X) costs not yet implemented.

Payment Order Guidance: Tap specific (colored) Boosters first, then universal to avoid color lock.

## 31. Timing Windows Summary (NEW)
| Window | Description | Instants Allowed? |
|--------|-------------|-------------------|
| Start (post‑untap) | After start triggers | ✔ |
| Main | Normal actions | ✔ |
| Pre‑Combat | After main, before attackers | ✔ |
| Post‑Attack Declare | After attackers declared, before blockers | ✔ |
| Post‑Block Declare | After blockers declared, before damage | ✔ |
| Post‑Damage | After combat damage resolves | ✔ |
| Second Main | As Main | ✔ |
| End | After end triggers | ✔ |
| Opponent Turn Windows | Mirrored; only Instants/flash abilities | ✔ (limited) |

## 32. Common Questions (FAQ) (NEW)
**Q: Can a Booster both tap for energy and block later that turn?**  
A: Yes, tapping does not remove its ability to block unless card text says otherwise.

**Q: Does damage persist after combat?**  
A: No, all non‑persistent damage clears at end of combat.

**Q: Can I play more than 5 HP of Boosters if a card reduces Booster HP?**  
A: Always count printed HP unless a card explicitly changes the *play limit* calculation.

**Q: Multiple players each have the same Legendary—legal?**  
A: Yes. Copy limit is deck construction only (no battlefield uniqueness yet).

**Q: What happens if I run out of cards during a multi‑card draw effect?**  
A: You immediately lose before finishing the remaining draws.

**Q: Can I respond to Booster plays?**  
A: Yes—Booster play is a normal main-phase action; opponents get priority after it resolves (no stack unless a triggered ability / replacement effect arises).

**Q: Are tokens considered cards?**  
A: No; they exist only on the battlefield. If they change zone (other than The Pail if specified) they vanish.

**Q: Can a first‑turn Monster attack?**  
A: Yes. Restriction applies only to tapping for activated abilities / costs.

**Q: Do I have to declare damage assignment order with a single blocker?**  
A: No, order matters only with multiple blockers.

## 33. Advanced / Optional House Rules (NEW)
These are NOT core; use for variant testing:
1. Attacking Taps: All attackers tap when declared (adds pacing).
2. Persistent Damage: Damage remains until end of *next* turn (increases attrition).
3. Sideboard 10: Best‑of‑3 match with a 10‑card sideboard (respect copy limits across main+side per copy).
4. Booster Color Lock: At least 50% of Boosters must share your predominant color (for multi‑color balance stress testing).
5. Exile Prototype: Treat “exile” as a face‑down public zone cards can return from only if an effect says so.

## 34. Accessibility & UI Tips (NEW)
- Use grid overlay for cleaner spacing when teaching new players.
- Color‑blind accommodation: Verbally announce Booster types until final iconography ships.
- Keep board saves to resume long multiplayer sessions.
- Limit hotkey reliance for new players; introduce rotation/tap first.

## 35. Versioning & Reporting Ambiguities (NEW)
When you believe a card contradicts rules:
1. Apply Golden Rule: Card text > rules.
2. If still ambiguous, document: card name, situation, proposed interpretations.
3. Submit with version tag (top of document) so historical context is maintained.

Non‑functional updates (like this expansion) increment the patch (v1.0.1). Functional rule changes will increment the minor (v1.1) or major if backwards‑incompatible.

---
_End of Document – v1.0.1_


