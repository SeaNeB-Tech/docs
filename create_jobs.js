const fs = require('fs');
const path = require('path');

const outline = {
  "1. Getting Started": [
    "What is Seaneb Jobs?",
    "How to Create an Account",
    "Login & OTP",
    "Update Your Profile",
    "Account Settings"
  ],
  "2. For Job Seekers": [
    "Search for Jobs",
    "Filter Jobs",
    "View Job Details",
    "Apply for a Job",
    "Track Your Applications",
    "Saved Jobs",
    "Applied Jobs",
    "Resume Management",
    "Download Free Resume",
    "Seeking Jobs — How It Works",
    "Manage Job Preferences"
  ],
  "3. For Employers": [
    "Register Your Business",
    "Create Employer Profile",
    "Post a Job",
    "Edit a Job",
    "Manage Posted Jobs",
    "Repost a Job",
    "Renew a Job",
    "Close a Job",
    "Manage Job Applications",
    "Shortlist Candidates",
    "Contact Candidates",
    "View Candidate Profiles"
  ],
  "4. Jobs & Applications": [
    "How Job Applications Work",
    "Application Status",
    "Withdraw an Application",
    "Job Expiry",
    "Closed & Expired Jobs",
    "Why Can't I Apply?",
    "Report a Job"
  ],
  "5. Resume": [
    "Create Your Resume",
    "Upload Resume",
    "Update Resume",
    "Download Resume",
    "Resume Visibility",
    "Resume Tips"
  ],
  "6. Payments & Plans": [
    "Seaneb Jobs Pricing",
    "Free Job Posts",
    "Paid Job Posts",
    "Credits",
    "Coupons & Discounts",
    "Payment Issues",
    "Payment Refunds"
  ],
  "7. Notifications": [
    "Email Notifications",
    "SMS Notifications",
    "WhatsApp Notifications",
    "Job Alerts",
    "Application Notifications",
    "How to Manage Notifications"
  ],
  "8. Account & Security": [
    "Change Mobile Number",
    "Change Email",
    "Forgot / Lost Access",
    "Delete Account",
    "Privacy & Security",
    "Blocked or Suspended Account"
  ],
  "9. Troubleshooting": [
    "OTP Not Received",
    "Unable to Login",
    "Job Not Showing",
    "Unable to Apply",
    "Resume Download Problem",
    "Payment Failed",
    "Notification Not Received"
  ],
  "10. Frequently Asked Questions": [
    "Is Seaneb Jobs free?",
    "Can I apply for multiple jobs?",
    "Can I post multiple jobs?",
    "How long does a job remain active?",
    "Can I edit a posted job?",
    "How do I delete my account?",
    "How do I contact support?"
  ],
  "11. Contact & Support": [
    "Contact Support",
    "Report a Problem",
    "Report a Fake Job",
    "Feedback",
    "Terms & Conditions",
    "Privacy Policy"
  ]
};

const baseDir = path.join(__dirname, 'docs', 'products', 'jobs');
if (fs.existsSync(baseDir)) {
    fs.rmSync(baseDir, { recursive: true, force: true });
}
fs.mkdirSync(baseDir, { recursive: true });

function slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
}

Object.entries(outline).forEach(([category, pages], catIndex) => {
    const catNumber = (catIndex + 1).toString().padStart(2, '0');
    const catName = category.replace(/^\d+\.\s*/, '');
    const catDirName = `${catNumber}-${slugify(catName)}`;
    const catPath = path.join(baseDir, catDirName);
    
    fs.mkdirSync(catPath, { recursive: true });
    
    fs.writeFileSync(path.join(catPath, '_category_.json'), JSON.stringify({
        label: catName,
        position: catIndex + 1,
        link: {
            type: 'generated-index',
            description: `Documentation for ${catName}`
        }
    }, null, 2));

    pages.forEach((page, pageIndex) => {
        const pageFileName = `${slugify(page)}.md`;
        const pagePath = path.join(catPath, pageFileName);
        const content = `---
title: "${page.replace(/"/g, '\\"')}"
sidebar_position: ${pageIndex + 1}
---

# ${page}

Detailed documentation for **${page}** will go here.
`;
        fs.writeFileSync(pagePath, content);
    });
});

console.log('Structure created successfully.');
