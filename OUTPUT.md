[Example output - you should start from scratch]

## Changes Made

### [App.tsx]

1. Types in line 8
   - Issue: Types and Tags lack types
   - Fix: Added TagListProps to avoid errors when getting data from server.
2. Unused state in 124

   - Issue: unused setTags state
   - Fix: removed the unused state because it can cause errors on production

3. Missing Avatar line 115

   - Issue: Missing Avatar image on header
   - Fix: Added the missing avatar image

4. Background of the app line 134

   - Issue: The background color on as in design
   - Fix: Added the appropriate color from design

5. Background of the header line 91

   - Issue: The background color on as in design
   - Fix: Added the appropriate color from design

6. Font family, and responsive font size line 43

   - Issue:Font family and responsive not available on the typography
   - Fix: Added the appropriate font family and the responsive breakpoints for the typography

7. Wrong usage of value line 110

   - Issue: Value used instead of placeholder
   - Fix: Used placeholder instead of placeholder

8. Wrong measurements for the search input line 111 and 78

   - Issue: The measurements, look and feel not consistent with the design
   - Fix: Added the appropriate measurements and color to the inputs to be consistent with the design

9. Make the Navbar responsive line 100

   - Issue: The search box on Navbar shouldn't be on small screen
   - Fix: Handled the inline media query to hide the search bar from the Navbar on small screens

10. Text color of badge line 23

- Issue: The change text color on as in design
- Fix: Added the appropriate text color from design

11. Appropriate font family and padding in line 16 and 23

- Issue: The font family and padding on the badge not as in design
- Fix: Added the appropriate padding and font family from design

### [Sidebar.tsx]

1. Linting/TypeScript issues line line 709, and line 27

   - Issue: The error caused by useSidebar: Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components.eslint(react-refresh/only-export-components)
   - Fix: Create a separate file for this hook in hooks/use-sidebar.ts to fix the issue the import the hook to sidebar.tsx . Delete the useSidebar from the exports and only import it from the the file use-sidebar.

2. Linting/TypeScript issues line 5
   - Issue: VariantProps lacks a type import
   - Fix: import VariantProps as a type
