import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {

  const [like, setlike] = useState(0);
  const [Dislike, setDislike] = useState(0);

  return (
    <div>

      <IconButton onClick={() => setlike(like + 1)} aria-label="Like" color="primary">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton onClick={() => setDislike(Dislike + 1)} aria-label="dislike" color="primary">
        <Badge badgeContent={Dislike} color="error">
          👎
        </Badge>
      </IconButton>


    </div>
  );

}
