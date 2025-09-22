import React from 'react';

const IconWrapper = (props: { children: React.ReactNode, className?: string }) => (
  <div className={props.className}>{props.children}</div>
);

// UI Icons
export const PlusIcon = () => (
    <IconWrapper className="w-4 h-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </IconWrapper>
);

export const LayoutGridIcon = () => (
    <IconWrapper className="w-4 h-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 8.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 8.25 20.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6A2.25 2.25 0 0 1 15.75 3.75h2.25A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25A2.25 2.25 0 0 1 13.5 8.25V6ZM13.5 15.75A2.25 2.25 0 0 1 15.75 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>
    </IconWrapper>
);

export const SparklesIcon = () => (
    <IconWrapper className="w-4 h-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m9.568 3.432 1.432 1.432a1.432 1.432 0 0 1 0 2.024L9.568 8.32m4.864 4.864 1.432 1.432a1.432 1.432 0 0 1 0 2.024l-1.432 1.432m-8.62-1.432 1.432-1.432a1.432 1.432 0 0 1 2.024 0l1.432 1.432m-8.62-8.62 1.432 1.432a1.432 1.432 0 0 1 2.024 0l1.432-1.432M3.432 9.568l1.432-1.432a1.432 1.432 0 0 1 2.024 0l1.432 1.432m8.62 8.62-1.432-1.432a1.432 1.432 0 0 1-2.024 0l-1.432 1.432m8.62-8.62-1.432 1.432a1.432 1.432 0 0 1-2.024 0l-1.432-1.432" /></svg>
    </IconWrapper>
);

export const SettingsIcon = () => (
    <IconWrapper className="w-4 h-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.008 1.11-1.226l.006-.002a12.006 12.006 0 0 1 2.58 0l.006.002c.55.218 1.02.684 1.11 1.226l.094.552a12.002 12.002 0 0 1 2.132 1.467l.4-.293c.516-.378 1.163-.332 1.63.123l.002.002a12.002 12.002 0 0 1 1.442 2.155l-.29.401c-.38.516-.334 1.163.122 1.63l.002.002a12.002 12.002 0 0 1 0 2.583l-.002.002c-.456.467-.912.422-1.63.122l-.401-.29c-1.467 2.132-3.896 3.597-6.574 3.597s-5.108-1.465-6.574-3.597l-.401.29c-.718.3-1.174-.344-1.63-.122l-.002-.002a12.002 12.002 0 0 1-1.442-2.155l.29-.401c.516-.718.422-1.174.122-1.63l-.002-.002a12.002 12.002 0 0 1 0-2.583l.002-.002c.3-.456.756-.912 1.63-.122l.401.29a12.002 12.002 0 0 1 2.132-1.467l.094-.552ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      </svg>
    </IconWrapper>
);


// App Icons
const AppIconContainer = (props: { children: React.ReactNode, className?: string }) => (
    <div className={`w-full h-full rounded-lg flex items-center justify-center text-white font-bold text-2xl ${props.className}`}>
        {props.children}
    </div>
);

export const PrivacyIcon = ({ className }: { className?: string }) => (
    <AppIconContainer className={`bg-green-500 ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Z" /></svg>
    </AppIconContainer>
);

export const InscricoesIcon = ({ className }: { className?: string }) => (
    <AppIconContainer className={`bg-blue-500 ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>
    </AppIconContainer>
);

export const RepositorioIcon = ({ className }: { className?: string }) => (
    <AppIconContainer className={`bg-indigo-500 ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>
    </AppIconContainer>
);

export const MoodleIcon = ({ className }: { className?: string }) => (
    <AppIconContainer className={`bg-orange-500 ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>
    </AppIconContainer>
);

export const AIStudioIcon = ({ className }: { className?: string }) => (
    <AppIconContainer className={`bg-purple-500 ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>
    </AppIconContainer>
);

export const SIGAAIcon = ({ className }: { className?: string }) => (
    <AppIconContainer className={`bg-teal-500 ${className}`}>S</AppIconContainer>
);

export const SUAPIcon = ({ className }: { className?: string }) => (
    <AppIconContainer className={`bg-rose-500 ${className}`}>SU</AppIconContainer>
);
