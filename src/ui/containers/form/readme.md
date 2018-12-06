# Formulär

Formulär används för att skicka data. Varje formulärelement är omslutet av ett `.form-group`-element.

## Textfält

Textfält låter användaren skriva in en kombination av bokstäver, siffror och symboler.
Textfält kan vara enradiga eller på flera rader.

Fältet går både att låsa helt `disabled`, tillåtas att kopieras/läsas `readonly` eller markera eventuella valideringsfel.

## Kryssrutor

Kryssrytor låter användaren göra ett eller flera val från en lista.
Namnkonvention med `.custom-control` är baserad på Bootstrap 4 men har anpassats för att möta [BEM](#konventioner).

## Radioknappar

Radioknappar låter användaren göra ett val från en synlig lista.
Namnkonvention med `.custom-control` är baserad på Bootstrap 4 men har anpassats för att möta [BEM](#konventioner).

## Rullgardinsmenyer

Rullgardinsmenyer låter användaren göra ett val från en lista.
Komponenten använder webbläsarens `<select>`-element i bakgrunden av tillgänglighetsskäl.

## Sökfält

Ett sökfält låter användaren söka efter specifikt innehåll.