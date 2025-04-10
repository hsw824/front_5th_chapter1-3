import React, { useState } from "react";
import { generateItems } from "./utils/utils";
import { memo, useCallback, useMemo } from "./@lib";
import { ThemeProvider } from "./store/theme/ThemeProvider";
import { UserProvider } from "./store/user/UserProvider";
import { NotificationProvider } from "./store/notification/NotificationProvider";

import AppContainer from "./AppContainer";

// TODO: 아예 theme관련 로직도 모두 다 theme.ts에다가 다 넣어버리고 나머지도

// 메인 App 컴포넌트
const App: React.FC = memo(() => {
  const initialItems = useMemo(() => generateItems(1000), []);
  const [items, setItems] = useState(initialItems);

  const addItems = useCallback(() => {
    setItems((prevItems) => [
      ...prevItems,
      ...generateItems(1000, prevItems.length),
    ]);
  }, []);

  return (
    <ThemeProvider>
      <UserProvider>
        <NotificationProvider>
          <AppContainer items={items} addItems={addItems} />
        </NotificationProvider>
      </UserProvider>
    </ThemeProvider>
  );
});

export default App;
