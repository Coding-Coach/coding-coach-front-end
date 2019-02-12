import React from 'react';

function NavBar({ configuration, ...rest }) {
  return (
    <nav className="fixed pin-b pin-x bg-white md:pin-y ">
      <ul role="tablist" className="list-reset flex px-0 md:px-3 lg:px-4">
        {configuration.tabs.map((tabConfig) => (
          <Tab
            key={tabConfig.name}
            name={tabConfig.name}
            to={tabConfig.path}
            isSelected={tabConfig.selected}
            label={tabConfig.label}
            icon={<tabConfig.icon className="w-12" active={tabConfig.selected} />}
          />
        ))}
      </ul>
    </nav>
  );
}

function Tab({ name, to, icon, label, isSelected }) {
  return (
    <li key={name} role="presentation" className="flex-1">
      <a
        href={to}
        role="tab"
        aria-selected={isSelected}
        className={`block text-center py-1 no-underline no-decoration ${
          isSelected ? 'text-primary' : 'text-secondary-dark'
        }`}
      >
        {icon}
        <span className="block text-xs">{label}</span>
      </a>
    </li>
  );
}
export default NavBar;
