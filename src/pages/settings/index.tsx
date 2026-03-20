import "./styles.css";

import { Theme } from "../../shared/assets";
import { Dropdown, Section } from "../../shared/ui";
import { themes } from "../../shared/const";
import { useTheme } from "../../shared/lib";

const Settings = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="settings-container">
      <Section header="Вибір теми" icon={<Theme />}>
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
