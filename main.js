class SelectSort
{
  static sort(arrays)
  {
    const len = arrays.length - 1;
    let minIndex;


    for (var i = 0; i < len; i++)
    {
      minIndex = i; //選択された最小のインデックス
      let minValue = arrays[minIndex];
      for (var j = i; j < len; j++)
      {
        if (minValue > arrays[j + 1])
        {
          minValue = arrays[j + 1];
          minIndex = j + 1;
        }
      }

      // array[j]はarrays[minIndex]と交換されます
      if (i != minIndex)
      {
        const tmp = arrays[i];
        arrays[i] = arrays[minIndex];
        arrays[minIndex] = tmp;
      }
    }
  }
}
