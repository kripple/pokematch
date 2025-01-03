import Box from '@mui/material/Box';

import { Attribution } from '@/components/Attribution';

export function Attributions() {
  return (
    <Box
      data-testid="Attributions"
      display="flex"
      flexDirection="column"
      gap={1.5}
    >
      <Attribution
        description={[
          { text: 'Favicon' },
          { text: 'by' },
          { text: 'Twemoji', link: 'https://github.com/twitter/twemoji' },
          { text: ',', punctuation: true },
          { text: 'licensed' },
          { text: 'under' },
          { text: 'the' },
          {
            text: 'CC-BY 4.0',
            link: 'https://creativecommons.org/licenses/by/4.0',
          },
          { text: '.', punctuation: true },
        ]}
        keyValue="twemoji"
      />

      <Attribution
        description={[
          { text: 'Forest' },
          { text: 'map' },
          { text: 'by' },
          { text: 'Rune Foundry', link: 'https://runefoundry.com/' },
          { text: '.', punctuation: true },
        ]}
        keyValue="runefoundry"
      />

      <Attribution
        description={[
          { text: 'Built' },
          { text: 'with' },

          { text: 'React', link: 'https://react.dev/' },
          { text: ',', punctuation: true },
          { text: 'Vite', link: 'https://vitejs.dev/' },
          { text: ',', punctuation: true },
          { text: 'and' },
          { text: 'Material UI', link: 'https://mui.com/material-ui/' },

          { text: '.', punctuation: true },
        ]}
        keyValue="runefoundry"
      />
    </Box>
  );
}
