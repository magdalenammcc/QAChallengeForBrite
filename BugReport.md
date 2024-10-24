### Bug Report: **Rate Button Is Not Enabled for 10-Star Rating on Top Box Office Movies**

---

**Title**: Rate button is not enabled when selecting 10 stars for movies in the "Top Box Office" section

---

**ID**: BUG-3215  
**Severity**: Medium / High (I would decide the severity checking first how many of our users usually choose 10 stars)  
**Priority**: Medium  
**Reported By**: Magdalena Mostazo  
**Date**: 10/24/2024  
**Environment**:  
- **Platform**: Web  
- **Browser**: Chrome Version 130.0.6723.59 (Official Build) (64-bit)  
- **Operating System**: Windows 11 Home version 22631.4391  

---

### **Description**:  
While attempting to rate movies in the "Top Box Office" section, the **Rate** button remains disabled when a 10-star rating is selected. 
This prevents users from submitting their rating. The issue appears consistently when trying to select the highest rating in any movie. 

---

### **Steps to Reproduce**:
1. Visit webpage https://www.imdb.com/ 
2. Click on the top left menu. 
3. On the left column, click on "Top Box Office" (5th option under the "Movies" section)
4. Every movie in the list has the possibility to Rate the film, as you can see here: 

![How to rate a movie in the "Top Box Office" list.](image.png)

5. Attempt to rate any movie. 
6. After the modal pops-up, attempt to select **10 stars**.
7. Observe the state of the **Rate** button, which is not enabled. 

---

### **Expected Result**:  
After selecting 10 stars, the **Rate** button should be enabled, allowing the user to submit their rating.

---

### **Actual Result**:  
The **Rate** button remains disabled after selecting 10 stars, preventing the submission of the rating.

---

### **Reproducibility**:  
- **Consistently** reproducible on every attempt, for any movie. 

---

### **Additional Information**:  
- The issue occurs only with a 10-star rating. Other ratings (1-9 stars) enable the **Rate** button correctly.
- No console errors or warning messages observed in the browser's developer tools.
- The issue is not specific to a single movie; it occurs across all movies in the "Top Box Office" section.

---

### **Attachments**:  
- **Screenshots**: [I would attach a screenshot, showing the 10-star rating selected and the disabled button]
- **Video**: [I would attach a short video (5-7 seconds) demonstrating the bug]

---

### **Severity Justification**:  
This bug affects the user experience by preventing the highest rating submission, which is important for users who want to provide a 10-star rating (I would provide numbers)