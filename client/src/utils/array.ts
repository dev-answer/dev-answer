export const groupArray = <T>(arr: readonly T[] | T[], count: number, reverse?: boolean) => {
  const result: T[][] = [];
  let temporary: T[] = [];

  const targetArray = reverse ? [...arr].reverse() : [...arr];

  targetArray.forEach((v) => {
    temporary.push(v);

    if (temporary.length === count) {
      result.push([...temporary]);
      temporary = [];
    }
  });

  if (temporary.length > 0) {
    result.push([...temporary]);
  }

  const reversedResult = [...result].map((v) => [...v].reverse()).reverse();

  return reverse ? reversedResult : result;
};

export const findIndexInGroupedArray = <T>(
  groupedArray: T[][],
  conditionCallback: (e: any) => void,
) => {
  const oneDimentionIndex = groupedArray.findIndex((groupedElement) => {
    const isTargetGroup = groupedElement.find(conditionCallback);
    return Boolean(isTargetGroup);
  });

  if (oneDimentionIndex < 0) {
    return [null, null];
  }

  const twoDimentionIndex = groupedArray[oneDimentionIndex].findIndex(conditionCallback);

  return [oneDimentionIndex, twoDimentionIndex];
};

export const makeGroupElementOneself = <T>(
  groupedArray: T[][],
  targetConditionCallback: (e: T) => void,
) => {
  const [
    targetOneDimentionIndex, targetTwoDimentionIndex,
  ] = findIndexInGroupedArray(groupedArray, targetConditionCallback);

  if (targetOneDimentionIndex === null || targetTwoDimentionIndex === null) {
    return { groupedArray, oneselfIndex: -1 };
  }

  const targetGroup = groupedArray[targetOneDimentionIndex];
  const targetElement = targetGroup[targetTwoDimentionIndex];

  const groupElementsBeforeTarget = targetGroup
    .slice(0, targetTwoDimentionIndex);
  const groupElementsAfterTarget = targetGroup
    .slice(targetTwoDimentionIndex + 1, targetGroup.length);

  const groupedArrayBeforeTargetGroup = groupedArray
    .slice(0, targetOneDimentionIndex);
  const groupedArrayAfterTargetGroup = groupedArray
    .slice(targetOneDimentionIndex + 1, groupedArray.length);

  const flattedArrayBeforeTargetGroup = (groupedArrayBeforeTargetGroup as any).flat();
  const flattedArrayAfterTargetGroup = (groupedArrayAfterTargetGroup as any).flat();

  const groupLength = groupedArray[0].length;

  const newGroupedArrayBeforeTargetElement = groupArray(
    [...flattedArrayBeforeTargetGroup, ...groupElementsBeforeTarget],
    groupLength,
    true,
  );
  const newGroupedArrayAfterTargetElement = groupArray(
    [...groupElementsAfterTarget, ...flattedArrayAfterTargetGroup],
    groupLength,
  );

  const result = [
    ...newGroupedArrayBeforeTargetElement,
    [targetElement],
    ...newGroupedArrayAfterTargetElement,
  ];

  return {
    groupedArray: result,
    oneselfIndex: groupElementsBeforeTarget.length > 0
      ? targetOneDimentionIndex + 1
      : targetOneDimentionIndex,
  };
};
