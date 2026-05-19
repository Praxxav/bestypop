import {
  CalendarDays,
  ClipboardCheck,
  Image as ImageIcon,
  Palette,
  PenTool,
  Pencil,
  Shirt,
  Sparkles,
  Target,
  Type,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { IconName } from '../data/profileTypes'

export const iconMap: Record<IconName, LucideIcon> = {
  calendar: CalendarDays,
  clipboard: ClipboardCheck,
  image: ImageIcon,
  palette: Palette,
  pen: PenTool,
  pencil: Pencil,
  shirt: Shirt,
  sparkles: Sparkles,
  target: Target,
  text: Type,
  users: Users,
}
