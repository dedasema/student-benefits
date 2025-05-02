import type React from 'react';

// GitHub Icon (Black)
export const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="#000" {...props}> {/* GitHub Black */}
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

// Azure Icon (Blue)
export const AzureIcon = (props: React.SVGProps<SVGSVGElement>) => (
 <svg viewBox="0 0 24 24" fill="#0078D4" {...props}> {/* Azure Blue */}
    <path d="M14.18 6.1l-3.7 8.96L5 17.84l9.18-11.74H14.18zM19 17.84l-6.88-2.78 2.58-6.24L19 17.84z"/>
 </svg>
);

// AWS Icon (Orange and Black) - Simplified to Orange for single color icon context
export const AWSIcon = (props: React.SVGProps<SVGSVGElement>) => (
 <svg viewBox="0 0 24 24" fill="#FF9900" {...props}> {/* AWS Orange */}
  <path d="M13.243 19.528c0 .285-.17.517-.51.517-.338 0-.51-.232-.51-.517 0-.288.172-.515.51-.515.34 0 .51.227.51.515zm.356-1.109c-.1-.03-.226-.04-.374-.04-.41 0-.702.228-.702.636 0 .21.11.385.285.49.174.1.378.14.59.14.127 0 .25-.015.37-.04l.17-.05V19.6c-.1.04-.225.06-.37.06-.41 0-.703-.228-.703-.636 0-.21.11-.385.285.49.174.1.378.14.59-.14.126 0 .25-.015.37-.04l.17-.05zm2.895 1.109c0 .285-.17.517-.51.517-.338 0-.51-.232-.51-.517 0-.288.172-.515.51-.515.34 0 .51.227.51.515zm-1.671-4.33c-.02-.007-.04-.013-.06-.02-.21-.06-.48-.12-.81-.12-.7 0-1.17.39-1.17 1.05 0 .44.33.76.78.92.25.09.54.15.86.17v1.38c-1.14-.18-1.92-.83-1.92-1.91 0-1.02.75-1.74 1.97-1.74.55 0 1.03.13 1.4.3l.05.02zm2.027 0c-.02-.007-.04-.013-.06-.02-.21-.06-.48-.12-.81-.12-.7 0-1.17.39-1.17 1.05 0 .44.33.76.78.92.25.09.54.15.86.17v1.38c-1.14-.18-1.92-.83-1.92-1.91 0-1.02.75-1.74 1.97-1.74.55 0 1.03.13 1.4.3l.05.02zm4.38 4.176c-.02.01-.04.015-.06.02-.2.06-.48.12-.8.12-.7 0-1.17-.39-1.17-1.05 0-.43.32-.75.77-.91.25-.09.54-.15.86-.17v-1.38c-1.14.18-1.92.83-1.92 1.9 0 1.02.75 1.74 1.97 1.74.55 0 1.03-.13 1.4-.3l.05-.02zM7.504 8.83c.41-.38.9-.68 1.48-.88l.33-.12c.33-.12.68-.23 1.04-.34.41-.12.8-.2 1.16-.2.8 0 1.26.37 1.26.87 0 .38-.24.64-.66.8-.24.09-.5.16-.78.2l-.32.05c-.43.06-.84.14-1.23.25-.5.14-.95.33-1.34.58-.43.28-.77.63-1 .98-.21.33-.3.68-.3 1.06 0 .8.44 1.45 1.22 1.9.43.25.9.4 1.4.4.32 0 .63-.05.9-.13l.34-.1c.4-.12.78-.27 1.12-.45.41-.22.75-.49 1-.81.09-.12.16-.27.2-.42h1.7c-.1.75-.45 1.38-1 1.83-.51.4-1.12.68-1.82.81l-.34.06c-.43.07-.88.1-1.34.1-.8 0-1.54-.21-2.16-.6-.58-.37-1.03-.88-1.3-1.45-.28-.6-.4-1.28-.4-1.98 0-.8.26-1.55.76-2.2.45-.6 1.08-1.08 1.84-1.43zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
 </svg>
);

// JetBrains Icon (Black/Orange/Purple) - Simplified to Black
export const JetBrainsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#000000" {...props}> {/* JetBrains Black */}
    <path d="M3 3h8v8H3z"/>
    <path d="M13 3h8v8h-8z"/>
    <path d="M3 13h8v8H3z"/>
    <path d="M13 13h8l-4 8-4-8z"/>
  </svg>
);

// Autodesk Icon (Red)
export const AutodeskIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#EC008C" {...props}> {/* Autodesk Magenta/Red */}
   <path d="M12 2L4.1 6.48V17.52L12 22l7.9-4.48V6.48L12 2zm-1.33 5.88l5.66 3.2V13.5l-5.66-3.2zm.01 4.65l5.66 3.2v1.23l-5.66-3.2zM6.67 8.07l5.66 3.2v1.18l-5.66-3.2z"/>
  </svg>
);

// Figma Icon (Multi-color)
export const FigmaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 24" {...props}>
    {/* Using original Figma brand colors */}
    <path d="M8 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#0acf83"/> {/* Green */}
    <path d="M4 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" fill="#a259ff"/> {/* Purple */}
    <path d="M4 4a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" fill="#f24e1e"/> {/* Red */}
    <path d="M8 4a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" fill="#ff7262"/> {/* Orange */}
    <path d="M12 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" fill="#1abcfe"/> {/* Blue */}
  </svg>
);

// MongoDB Icon (Green)
export const MongoDBIcon = (props: React.SVGProps<SVGSVGElement>) => (
 <svg viewBox="0 0 24 24" fill="#4DB33D" {...props}> {/* MongoDB Green */}
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.93c-3.93-.5-6-3.4-6-6.93s2.07-6.43 6-6.93v13.86zm2 0V5.07c3.93.5 6 3.4 6 6.93s-2.07 6.43-6 6.93z"/>
 </svg>
);

// Unity Icon (Black)
export const UnityIcon = (props: React.SVGProps<SVGSVGElement>) => (
 <svg viewBox="0 0 24 24" fill="#000000" {...props}> {/* Unity Black */}
    <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm-6 5l6 3 6-3v2l-6 3-6-3V7zm0 4l6 3 6-3v2l-6 3-6-3v-2zm0 4l6 3 6-3v2l-6 3-6-3v-2z"/>
 </svg>
);

// Adobe Icon (Red)
export const AdobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#FF0000" {...props}> {/* Adobe Red */}
    <polygon points="14.5 3 21.5 3 21.5 15.5 14.5 3"/>
    <polygon points="9.5 3 2.5 3 2.5 15.5 9.5 3"/>
    <polygon points="12 8.5 16 21 13.5 21 12.75 19 11.25 19 10.5 21 8 21 12 8.5"/>
  </svg>
);

// Tableau Icon (Blue and Gray) - Simplified to Blue
export const TableauIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="#E97627" {...props}> {/* Using Tableau Orange/Blue - choosing one primary color */}
    {/* Official Tableau uses multiple colors, simplifying here */}
    <path d="M4 4h4v16H4z"/>
    <path d="M10 4h4v10h-4z"/>
    <path d="M16 4h4v6h-4z"/>
    <path d="M10 16h4v4h-4z"/>
    <path d="M16 12h4v8h-4z"/>
  </svg>
);

// Coursera Icon (Blue)
export const CourseraIcon = (props: React.SVGProps<SVGSVGElement>) => (
 <svg viewBox="0 0 24 24" fill="#0056d2" {...props}> {/* Coursera Blue */}
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>
 </svg>
);
