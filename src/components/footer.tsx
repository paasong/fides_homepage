import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Detail</p>
    </footer>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #ccc',
    backgroundColor: '#ffffff',
  },
};
