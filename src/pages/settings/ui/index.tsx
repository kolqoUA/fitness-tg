import "./styles.css";

import { Dropdown, Section } from '@/shared/ui'
import { themes } from '@/shared/const'
import { useTheme } from '@/shared/lib'
import { Palette } from "lucide-react";

const Settings = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="settings-container">
      <Section header="Вибір теми" icon={<Palette size={18} strokeWidth={1}/>}>
        <Dropdown
          dropdownOptions={themes}
          startValue={theme || themes[0]}
          onChange={setTheme}
        />
      </Section>
    </div>
  );
};

export default Settings;
