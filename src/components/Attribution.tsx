import CircleIcon from '@mui/icons-material/Circle';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export function Attribution({
  description,
  keyValue,
}: {
  description: (
    | { text: string }
    | { text: string; link: string }
    | { text: string; punctuation: true }
  )[];
  keyValue: string;
}) {
  return (
    <Box display="flex" flexDirection="row">
      <Box sx={{ minWidth: '32px' }}>
        <CircleIcon style={{ height: '8px' }} />
      </Box>

      <Box display="inline-flex" flexWrap="wrap" gap={0.5}>
        {description.map((item, index) => {
          return (
            <Box
              key={`${keyValue}-${index}`}
              ml={'punctuation' in item ? -0.5 : 0}
            >
              {'link' in item ? (
                <Link
                  href={item.link}
                  tabIndex={-1}
                  target="_blank"
                  underline="none"
                  whiteSpace="nowrap"
                >
                  {item.text}
                </Link>
              ) : (
                item.text
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
