# Utility Classes Reference

## Container Classes
```jsx
// Instead of: className="w-[80%] mx-auto px-6"
<div className="container-main">

// Instead of: className="max-w-4xl mx-auto px-6"  
<div className="container-content">

// Instead of: className="max-w-3xl mx-auto px-6"
<div className="container-narrow">
```

## Section Classes
```jsx
// Instead of: className="py-20"
<section className="section-padding">

// Instead of: className="py-20 bg-white"
<section className="section-bg-white">

// Instead of: className="py-20 bg-gray-50"
<section className="section-bg-gray">

// Instead of: className="py-20 bg-blue-50"
<section className="section-bg-blue">
```

## Card Classes
```jsx
// Instead of: className="bg-white rounded-2xl shadow-sm hover:shadow-md transition"
<div className="card-base">

// Instead of: className="p-6 lg:p-8"
<div className="card-padding">

// Instead of: className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-10"
<div className="card-feature">
```

## Grid Classes
```jsx
// Instead of: className="grid md:grid-cols-2 gap-8"
<div className="grid-2">

// Instead of: className="grid md:grid-cols-3 gap-8"
<div className="grid-3">

// Instead of: className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
<div className="grid-auto">
```

## Flex Classes
```jsx
// Instead of: className="flex items-center justify-center"
<div className="flex-center">

// Instead of: className="flex items-center justify-between"
<div className="flex-between">

// Instead of: className="flex flex-col items-center justify-center"
<div className="flex-col-center">
```

## Button Classes
```jsx
// Instead of: className="inline-flex items-center justify-center px-8 py-3 rounded-2xl text-white font-bold bg-[#126DFB] hover:opacity-90 transition"
<button className="btn-primary">

// Instead of: className="inline-flex items-center justify-center px-6 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
<button className="btn-secondary">
```

## Icon Classes
```jsx
// Instead of: className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-600"
<div className="icon-container">

// Instead of: className="h-20 w-20 object-contain"
<img className="icon-large">
```

## Layout Classes
```jsx
// Instead of: className="flex flex-col lg:flex-row justify-between gap-8 mb-16"
<div className="two-column-header">

// Instead of: className="text-center mb-16"
<div className="text-center-section">

// Instead of: className="whitespace-pre-line"
<p className="text-pre-line">
```

## Tag/Badge Classes
```jsx
// Instead of: className="text-base font-medium tracking-wider text-[#126DFB] uppercase bg-[#EBF0F9] p-2"
<span className="tag-primary">
```

## Usage Examples

### Before (Repetitive)
```jsx
<section className="py-20 bg-white">
  <div className="w-[80%] mx-auto px-6">
    <div className="flex flex-col lg:flex-row justify-between gap-8 mb-16">
      <h2 className="text-3xl font-bold">Title</h2>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8">
        Card content
      </div>
    </div>
  </div>
</section>
```

### After (Clean)
```jsx
<section className="section-bg-white">
  <div className="container-main">
    <div className="two-column-header">
      <h2 className="text-3xl font-bold">Title</h2>
    </div>
    <div className="grid-2">
      <div className="card-base card-padding">
        Card content
      </div>
    </div>
  </div>
</section>
```

## Benefits
- ✅ **Consistent spacing** - All sections use the same padding
- ✅ **Faster development** - No need to remember long class combinations
- ✅ **Easy maintenance** - Change styles in one place
- ✅ **Cleaner code** - More readable component files
- ✅ **Design system** - Enforces consistent patterns across the app