document.addEventListener('DOMContentLoaded', function() {
    var carButton = document.querySelector('.tab-button[data-category="cars"]');
    var carSubTabs = document.querySelector('.car-sub-tabs');
    var allMainTabs = document.querySelectorAll('.tab-button:not(.sub-button)');

    carButton.addEventListener('click', function() {
        var isActive = carSubTabs.classList.contains('active');

        // أولاً: قم بإزالة التفعيل من جميع الأزرار الرئيسية باستثناء "عرض الكل"
        allMainTabs.forEach(function(tab) {
            if (tab.dataset.category !== 'all' && tab.dataset.category !== 'cars') {
                tab.classList.remove('active');
            }
        });
        
        // تبديل حالة زر السيارات
        carButton.classList.toggle('active');

        // تبديل إظهار/إخفاء القائمة الفرعية
        if (isActive) {
            carSubTabs.classList.remove('active');
        } else {
            carSubTabs.classList.add('active');
        }
    });

    // يمكنك إضافة منطق آخر هنا للتعامل مع ضغط "عرض الكل" أو الأزرار الفرعية

    // مثال: عند الضغط على زر فرعي
    document.querySelectorAll('.sub-button').forEach(function(subButton) {
        subButton.addEventListener('click', function() {
            // إزالة التفعيل من جميع الأزرار الفرعية
            document.querySelectorAll('.sub-button').forEach(b => b.classList.remove('active'));
            // تفعيل الزر الذي تم الضغط عليه
            subButton.classList.add('active');
            // التأكد من تفعيل زر السيارات (اختياري)
            carButton.classList.add('active'); 
        });
    });

    // مثال: عند الضغط على زر رئيسي آخر
    document.querySelectorAll('.tab-button:not(.has-subcategories):not(.sub-button)').forEach(function(mainTab) {
        mainTab.addEventListener('click', function() {
            // إزالة تفعيل الأزرار الفرعية وإخفائها
            carSubTabs.classList.remove('active');
            carButton.classList.remove('active');
            document.querySelectorAll('.sub-button').forEach(b => b.classList.remove('active'));

            // تفعيل الزر الرئيسي الذي تم الضغط عليه
            document.querySelectorAll('.tab-button:not(.sub-button)').forEach(b => b.classList.remove('active'));
            mainTab.classList.add('active');
        });
    });
});