import { useState } from 'react';

const TabsContainer = ({children}) => {
    return (
        <ul className="flex flex-wrap text-sm font-medium text-center border-b mb-2">
            {children}
        </ul>
    );
}

const Tab = ({name, setActive, active}) => {
    const baseClasses = 'inline-block p-3 rounded-t-lg border-b border-gray-200';
    const activeClasses = `${baseClasses} bg-slate-600 text-slate-100`;
    const inactiveClasses = `${baseClasses} bg-slate-200 text-slate-700`;

    return (
        <li key="name" className="mr-2">
            <a href="#" onClick={() => setActive()} className={active ? activeClasses : inactiveClasses}>
                {name}
            </a>
        </li>
    );
}

const Tabs = ({tabs}) => {
    const [openTab, setOpenTab] = useState(0);

    return (
        <>
        <TabsContainer>
            {tabs.map((t, i) => (
                <Tab name={t.name} setActive={() => setOpenTab(i)} active={openTab === i}/>
            ))}
        </TabsContainer>
        <div>
            {tabs.map((t, i) => (
                <div className={openTab === i ? "block" : "hidden"}>
                    {t.content}
                </div>
            ))}
        </div>
        </>
    );
}

export default Tabs;