import * as outline from '@heroicons/react/24/outline';
import * as solid from '@heroicons/react/24/solid';
import { HeroIconProps } from '@/typings/icons/HeroIcons';

export default function useHeroIcon({ iconName, type }: HeroIconProps) {
  const Icon = type === 'solid' ? solid[iconName] : outline[iconName];

  return Icon;
}
