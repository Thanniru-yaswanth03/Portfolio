import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

pdf_path = r"c:\Users\batma\Desktop\VibeCode\Site\Deployment_Guide_Thanniru_Yaswanth.pdf"

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    rightMargin=40,
    leftMargin=40,
    topMargin=40,
    bottomMargin=40
)

styles = getSampleStyleSheet()

# Custom styles
title_style = ParagraphStyle(
    'DocTitle',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=22,
    leading=26,
    textColor=colors.HexColor('#0F172A'),
    spaceAfter=6
)

subtitle_style = ParagraphStyle(
    'DocSubTitle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=11,
    leading=15,
    textColor=colors.HexColor('#475569'),
    spaceAfter=15
)

h2_style = ParagraphStyle(
    'SectionHeader',
    parent=styles['Heading2'],
    fontName='Helvetica-Bold',
    fontSize=14,
    leading=18,
    textColor=colors.HexColor('#1E3A8A'),
    spaceBefore=14,
    spaceAfter=8
)

h3_style = ParagraphStyle(
    'SubSectionHeader',
    parent=styles['Heading3'],
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=15,
    textColor=colors.HexColor('#2563EB'),
    spaceBefore=10,
    spaceAfter=6
)

body_style = ParagraphStyle(
    'BodyDark',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=10,
    leading=14,
    textColor=colors.HexColor('#334155'),
    spaceAfter=8
)

code_style = ParagraphStyle(
    'CodeSnippet',
    parent=styles['Normal'],
    fontName='Courier',
    fontSize=9,
    leading=12,
    textColor=colors.HexColor('#0F172A'),
    backColor=colors.HexColor('#F1F5F9'),
    borderColor=colors.HexColor('#CBD5E1'),
    borderWidth=1,
    borderPadding=6,
    spaceBefore=4,
    spaceAfter=8
)

story = []

# Header Banner
story.append(Paragraph("Next.js Deployment & Hosting Guide", title_style))
story.append(Paragraph("Comprehensive Step-by-Step Manual for Hosting Thanniru Yaswanth's Portfolio Website", subtitle_style))
story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#2563EB'), spaceAfter=15))

# Introduction
story.append(Paragraph("This manual provides clear instructions to host your Next.js website live on the web for <b>100% free</b> with automated SSL (HTTPS), global CDN distribution, and full support for your <b>OpenRouter AI Digital Twin</b> and <b>Contact Email API</b>.", body_style))

# Method 1: Vercel + GitHub
story.append(Paragraph("Method 1: Deploy via Vercel + GitHub (Recommended)", h2_style))
story.append(Paragraph("Vercel is built by the creators of Next.js and offers zero-configuration hosting with automatic builds whenever you push code updates to GitHub.", body_style))

story.append(Paragraph("Step 1: Push Project Code to GitHub", h3_style))
story.append(Paragraph("Open PowerShell in your site directory (<code>c:\\Users\\batma\\Desktop\\VibeCode\\Site</code>) and execute:", body_style))
story.append(Paragraph("git init<br/>git add .<br/>git commit -m &quot;Initial commit of Next.js portfolio website&quot;<br/>git branch -M main", code_style))

story.append(Paragraph("Create a new public/private repository on <font color='#2563EB'><u>GitHub.com</u></font> named <b>yaswanth-portfolio</b> and push your code:", body_style))
story.append(Paragraph("git remote add origin https://github.com/Thanniru-yaswanth03/yaswanth-portfolio.git<br/>git push -u origin main", code_style))

story.append(Paragraph("Step 2: Connect & Deploy on Vercel", h3_style))
story.append(Paragraph("1. Navigate to <b>vercel.com</b> and sign in using your GitHub account.<br/>2. Click <b>Add New...</b> &rarr; <b>Project</b>.<br/>3. Select your <b>yaswanth-portfolio</b> repository and click <b>Import</b>.<br/>4. Expand <b>Environment Variables</b> and configure:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&bull; <b>NAME:</b> OPENROUTER_API_KEY<br/>&nbsp;&nbsp;&nbsp;&nbsp;&bull; <b>VALUE:</b> &lt;your_openrouter_api_key&gt;<br/>5. Click <b>Deploy</b>.", body_style))

story.append(Spacer(1, 10))

# Method 2: CLI
story.append(Paragraph("Method 2: Direct Command Line Deploy (npx vercel)", h2_style))
story.append(Paragraph("Deploy directly from your terminal without requiring GitHub first:", body_style))
story.append(Paragraph("npx vercel", code_style))
story.append(Paragraph("Follow the brief browser prompt, add <code>OPENROUTER_API_KEY</code> in your Vercel project dashboard, then execute <code>npx vercel --prod</code>.", body_style))

story.append(Spacer(1, 10))

# Post Deployment Checklist
story.append(Paragraph("Post-Deployment Verification Checklist", h2_style))
story.append(Paragraph("1. <b>AI Digital Twin:</b> Test the floating chat drawer on your live site to confirm OpenRouter responses work.<br/>2. <b>Email Contact Form:</b> Test submitting a message on the contact section to verify emails land in <code>yash1th2k4@gmail.com</code>.<br/>3. <b>Custom Domain (Optional):</b> Link your custom domain (e.g. <i>thanniruyaswanth.com</i>) under Vercel Settings &rarr; Domains.", body_style))

story.append(Spacer(1, 15))
story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#94A3B8'), spaceAfter=10))
story.append(Paragraph("Generated for Thanniru Yaswanth | Full Stack Software Developer | Hyderabad, India", ParagraphStyle('Footer', parent=styles['Normal'], fontSize=8, textColor=colors.HexColor('#64748B'), alignment=1)))

doc.build(story)
print("PDF generated successfully at:", pdf_path)
