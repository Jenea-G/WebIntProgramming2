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

## Syntax Errors - parent/child classes

**File:**  
FeaturedPerformance.js
Performance.js

**Problem:**

- Uncaught SyntaxError: 'super' keyword unexpected here (at PerformanceCard.js:3:9)

**Fix:**

- change `export class FeaturedPerformance {...` to `export class FeaturedPerformance extends Performance {...` to get parent constructor available.
- corrected properies names and order to match with those in the parent class.
- fixed some property names, data type conversion, logic issue and method use in parent class.

**Test:**  
Reloaded page and checked the console, error have disappiared.

==============

## Syntax Errors - Custom Element creation error

**File:**  
PerformanceCard.js

**Problem:**

- Uncaught SyntaxError: 'super' keyword unexpected here (at PerformanceCard.js:3:9)
- PerformanceCard did not extend HTMLElement.
- TypeError: Class constructor PerformanceCard cannot be invoked without 'new' (line 67 remove ())
- shadow do not attach clone content
- SyntaxError: Failed to execute 'define' on 'CustomElementRegistry': "performance" is not a valid custom element name at PerformanceCard.js:67:16

**Fix:**

- added `extends HTMLElement` used connectedCallback() instead of a constructor
- added `.content` to `shadow.appendChild(template.content.cloneNode(true))`;
- fixed custom element definition constructor: removed (), replaced element name "performance" with "performance-card" as the name should contain hyphen.

**Test:**
checked for PerformanceCard error in console.
