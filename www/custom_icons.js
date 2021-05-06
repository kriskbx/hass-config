const ICON = {
  'synology-nas':
    'M3 6v11h3V6H3zm2 10H4v-1h1v1zM7 6v11h3V6H7zm2 10H8v-1h1v1zm2-10v11h3V6h-3zm2 10h-1v-1h1v1zm2-10v11h3V6h-3zm2 10h-1v-1h1v1zm4-13H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 15a.94.94 0 0 1-1 1H4c-1.1 0-2-.9-2-2V6a.94.94 0 0 1 1-1h15a.94.94 0 0 1 1 1v12zm2-1a.94.94 0 0 1-1-1 .94.94 0 0 1 1-1 .94.94 0 0 1 1 1 .94.94 0 0 1-1 1z',
};

async function getIcon(name) {
  return {
    path: ICON[name]
  };
}

window.customIconsets = window.customIconsets || {};
window.customIconsets['custom'] = getIcon;
