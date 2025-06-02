import React from 'react';

export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.logo}>회사<br />로고</div>
      <div style={styles.indicator}>
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} style={styles.dot}></div>
        ))}
      </div>
    </aside>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  sidebar: {
    width: '80px',
    backgroundColor: '#e0e0e0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px',
    borderRight: '1px solid #ccc',
  },
  logo: {
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  indicator: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#007BFF',
  },
};
