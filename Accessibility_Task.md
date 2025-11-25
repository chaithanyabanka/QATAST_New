### List of Issues
- **Form fields lack labels:** All inputs and textarea require associated `<label>` tags or `aria-label` attributes.
- **Image missing alt attribute:** Robot image needs `alt=""` (if decorative) or a descriptive `alt`.
- **No ARIA landmarks or semantic headings:** Main content area and form should use appropriate roles, and headings must follow semantic structure.
- **HTML lang missing:** Add `<html lang="en">`.
- **Image not fully displayed at 100% zoom; no scrollbar:** Image must reflow or be scrollable.
- **'Done' button alignment:** Button is not visually aligned with form fields.
- **Focus styles inconsistent across devices:** Inputs only show focus on mobile, not desktop.

### Detailed Bug Report

**1. Image Not Fully Displayed and No Scroll Bar**

**Title:** Robot image not fully displayed at 100% zoom; no scroll bar available.

**Severity:**
Medium

**Steps to Reproduce:**

1. Open the html page in a standard desktop browser at 100% zoom.

2. Observe the robot image on the right side of the form.

3. The image is partially hidden and cannot be viewed fully unless zoomed out to 50%.

4. Try to scroll horizontally or vertically; no scroll bar appears to access the rest of the image.

**Expected Result:**
Robot image should be fully visible at 100% zoom, or scroll bars should appear to enable complete viewing.

**Actual Result:**
Part of the robot image is hidden off-screen, and users cannot scroll to view the full image.


**2. Focus Styles Inconsistent Across Devices**

**Title:** Focus indicator for input fields only appears on mobile, not desktop.

**Severity:** Medium

**Steps to Reproduce:**

1. Open the html page in a desktop browser.

2. Tab into or click each input field and textarea.

3. Note that on desktop, no visible border or color change occurs during focus.

4. Repeat the test on a mobile device; the border turns light orange.

**Expected Result:**
All interactive form controls should show a clearly visible and consistent focus indicator across desktop and mobile.

**Actual Result:**
Focus indicator appears only on mobile view.


**3. ‘Done’ Button Misalignment with Form Controls**

**Title:** ‘Done’ button is not visually aligned with input fields.

**Severity:** Low to Medium

**Steps to Reproduce:**

1. Open the html page.

2. Observe the position of the 'Done' button relative to the form fields.

3. Notice the button is not directly grouped or aligned with Full name, Email, and Message boxes.

**Expected Result:**
‘Done’ button should be properly aligned and visually grouped with corresponding input fields.

**Actual Result:**
Button appears offset or misaligned, creating a confusing layout.




