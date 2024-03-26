import { Tab, TabList, Tabs } from '@chakra-ui/react';

export const TabsKit = (props: any) => {
  const { options, ...rest } = props;
  return (
    <Tabs variant="primary">
      <TabList>
        {options.map((el: any, i: number) => {
          return (
            <Tab
              style={{
                borderRight: i === options.length - 1 ? 'none' : '1px solid',
                borderLeft: i === 0 ? 'none' : '1px solid',
              }}
              key={el}
            >
              {el.title}
            </Tab>
          );
        })}
      </TabList>
    </Tabs>
  );
};
