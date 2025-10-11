import { render, screen } from '@testing-library/react';
import Button from '../components/atoms/Buttons';
import React from 'react';

describe('Button Component', () => {
 it('renderiza el botón correctamente', () => {
   const { getByText } = render(<Button />);
   expect(getByText('Ver Proyecto')).toBeTruthy(); // Matcher básico: verifica que el elemento existe
 });


 it('aplica los props correctamente', () => {
   render(<Button variant = "primary" onClick = {() => navigate({ pathname: proyectos.url })}>Ver Proyecto</Button>);
   const button = screen.getByText('Ver Proyecto');
   expect(button).toHaveClass('btn-primary');
 });
});