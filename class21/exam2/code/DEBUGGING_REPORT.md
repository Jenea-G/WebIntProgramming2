## Syntax Errors - refferences

**File:**  
app.js
FeaturedPerformance.js

**Problem:**

- incorrect DOM id refferences causing listeners being attached to null.
- importing from js modules without curly brackets or with incorrect class or function names.

**Fix:**

- added missing class name, and correct refferenced file name `import "./PerformanceCards.js";` to `import { PerformanceCard } from "./PerformanceCard.js";`
- changed ids from `"load-festival", "search", "ticket-filter" ...` to `"load-lineup", "search-input", "tickets-filter"...`
- added missing curly brackets for class importing in FeaturedPerformance.js

**Test:**  
Reloaded page and checked the console, errors have disappiared.
