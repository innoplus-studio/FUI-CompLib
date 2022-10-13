### ChangeLog

# v4.0.0

- deprecated `FMoreActionPopUp`

- added components:

  - `FScrollableContainer`
  - `FDoubleTabsPanel` (_separate from `FDoubleTabs`_)
  - `FTabsPanel` (_separate from `FTabs`_)

- renamed components:

  - `FDnDOrder` --> `FDragAndDrop`
  - `FCreateSelect` --> `FInputSelect`

- renamed utils functions:

  - `FCheckIsDarkMode` --> `FCheckIsDarkThemeMode`
  - `FFirstLetterUppercase` --> `FFirstCharUppercase`
  - `FAutoConvertArray` --> `FReturnArray`
  - `FUseColor` --> `FReturnColor`
  - `FDateTimer` --> `FReturnDate`
  - `FRwdModeHandler` --> `FReturnRWDMode`
  - `FUseScreenSize` --> `FReturnScreenSize`
  - `FSingleDigitConverter` --> `FSingleToDoubleDigit`

- changed `FRWDMode.FULL` to `FRWDMode.PC`

- added types in _global.types.ts_:

  - `NumericStringType`
  - `FOnHoverProperty`
  - `FComponentType`
  - `FComponentsType`

- modified components params so may need to change the current props:

  - added _hover_ param in style and className in some components, e.g. `FText`
  - removed _\*style_ and _\*className_ in some components,
    use `style` and `className` in _\*props_ instead

- will add `FNumberInputField` in later version