import { Variants } from 'framer-motion'
import * as React from 'react'
import { MotionBox, MotionBoxProps } from './MotionBox'

export const NavMenu = (props: MotionBoxProps) => (
  <MotionBox
    initial="init"
    variants={variants}
    outline="0"
    opacity="0"
    bgGradient="linear(to-b, gray.900, gray.800)"
    w="full"
    shadow="lg"
    px="4"
    pos="absolute"
    insetX="0"
    py="12"
    {...props}
  />
)

const variants: Variants = {
  init: {
    opacity: 0,
    y: -4,
    display: 'none',
    transition: { duration: 0 },
  },
  open: {
    opacity: 1,
    y: 0,
    display: 'block',
    transition: { duration: 0.15 },
  },
  closed: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.1 },
    transitionEnd: {
      display: 'none',
    },
  },
}
