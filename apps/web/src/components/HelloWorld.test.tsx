import React from 'react';

import HelloWorld from '@src/components/Hello';
import { render, screen } from '@testing-library/react';

describe('tests', () => {
  it('should', () => {
    render(<HelloWorld />);
    expect(screen.getByText('Boop')).toBeInTheDocument();
  });
});
