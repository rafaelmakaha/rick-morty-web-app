type componentType = 'div' | 'text' | 'input' | 'button' | 'img'

export const assignTestId = (
  componentType: componentType,
  componentId: string
) =>
  process.env.NODE_ENV !== 'production'
    ? {
        'data-testid': `${componentType}_${componentId}`
      }
    : {}

export const mockTestID = (
  componentType: componentType,
  componentId: string
): string => assignTestId(componentType, componentId)['data-testid'] ?? ''
