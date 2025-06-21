import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Jyotirling from '../index'

describe('Jyotirling Component', () => {
  it('renders the heading', () => {
    render(<Jyotirling />)
    expect(screen.getByText("Jyotirling")).toBeInTheDocument()
  })
})