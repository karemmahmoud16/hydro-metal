import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

const HERO_COMPONENT_IMPORTS = [NgOptimizedImage];

@Component({
  selector: 'app-hero',
  imports: HERO_COMPONENT_IMPORTS,  
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {}
