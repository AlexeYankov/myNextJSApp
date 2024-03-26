import { useDeferredValue, useEffect, useState } from 'react';
import {
  Center,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';
import { InputKit } from '../input';
import { useDebounce } from '@/shared/helpers/hooks/useDebounce';

type SliderValueType = {
  data?: RangeStateType;
  value: number | null;
  inputPlace?: 'start' | 'end';
};

type RangeStateType = {
  start: number;
  end: number;
};

export const SliderKit = () => {
  const [minMaxDefaultValue, setMinMaxDefaultValue] = useState<RangeStateType>({
    start: 0,
    end: 100,
  });
  const [value, setValue] = useState<RangeStateType>({
    start: 0,
    end: minMaxDefaultValue.end,
  });
  const [maxValue, setMaxValue] = useState(minMaxDefaultValue.end);
  let currentEnd = useDebounce(
    maxValue <= minMaxDefaultValue.end ? maxValue : value.end
  );
  useEffect(() => {
    if (currentEnd) {
      if (minMaxDefaultValue.end >= currentEnd) {
        setValue({ start: value.start, end: currentEnd });
      }
      if (minMaxDefaultValue.end < currentEnd) {
        setMaxValue(value.end);
      }
    }
  }, [maxValue, currentEnd]);

  const valueHandler = (data: SliderValueType) => {
    if (data.inputPlace) {
      if (
        data.inputPlace === 'start' &&
        data.value !== null &&
        value.end > data.value
      ) {
        return setValue({ start: data.value, end: value.end });
      }
    }
    if (data.data) {
      setValue({ start: data.data.start, end: data.data.end });
    }
  };
  return (
    <Center width={'270px'} gap="4">
      <InputKit
        maxW="40px"
        onChange={(newValue) =>
          valueHandler({
            inputPlace: 'start',
            value: Number(newValue.currentTarget.value),
          })
        }
        value={value.start}
      />
      <RangeSlider
        aria-label={['min', 'max']}
        onChange={(val) =>
          valueHandler({ data: { start: val[0], end: val[1] }, value: null })
        }
        value={[value.start, value.end]}
        defaultValue={[minMaxDefaultValue.start, minMaxDefaultValue.end]}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0}>
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              zIndex: 100,
              background: 'white',
            }}
          />
        </RangeSliderThumb>
        <RangeSliderThumb index={1}>
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              zIndex: 100,
              background: 'white',
            }}
          />
        </RangeSliderThumb>
      </RangeSlider>
      <InputKit
        maxW="50px"
        onChange={(newValue) =>
          setMaxValue(Number(newValue.currentTarget.value))
        }
        value={value.end}
      />
    </Center>
  );
};
