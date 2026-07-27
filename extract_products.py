import os
import re

WORD_DIR = r"d:\大学作业\北京德烁实习资料\网页设计\dosertec-website\产品宣传单页"
IMAGE_DIR = r"d:\大学作业\北京德烁实习资料\网页设计\dosertec-website\产品图片"

def extract_model_from_filename(filename):
    name = os.path.splitext(filename)[0]
    name = name.replace('~$', '')
    patterns = [
        r'(DS-PR\d+)',
        r'(DS-HD\d+[A-Z]?)',
        r'(DS-HT\d+[A-Z]?)',
        r'(DS-PM\d+[A-Z\-]?)',
        r'(DS-PT\d+L?)',
        r'(BES-[A-Z0-9\-]+)',
        r'(Mic-[A-Z0-9\-]+)',
        r'(PCP-[A-Z0-9\-]+)',
        r'(D\d+-[RS])',
        r'(\d+CC)',
    ]
    for pattern in patterns:
        match = re.search(pattern, name)
        if match:
            return match.group(1)
    return None

def extract_name_from_filename(filename):
    name = os.path.splitext(filename)[0]
    name = name.replace('~$', '')
    parts = name.split(' ')
    if len(parts) >= 2:
        return ' '.join(parts[:-1]).strip()
    return name.strip()

def generate_description(name):
    if '调压阀' in name:
        return '精密调压控制，稳定输出压力'
    elif '开关阀' in name:
        return '高速开关响应，精准流体控制'
    elif '手动胶枪' in name:
        return '轻便手持设计，精准点胶作业'
    elif '螺杆泵' in name:
        if '微量' in name:
            return '微量精密计量，高精度流体输送'
        elif '双组份' in name:
            return '双组份精密配比，均匀混合输送'
        else:
            return '大流量稳定输送，高粘度流体适用'
    elif '压盘泵' in name or '供胶' in name:
        return '高粘度物料供胶，稳定连续输送'
    elif '抽料' in name:
        return '真空抽料系统，高效供料解决方案'
    elif '定量缸' in name or '定量机' in name:
        return '高精度定量计量，稳定出胶控制'
    elif '压力罐' in name:
        return '不锈钢储料容器，稳定压力供料'
    elif '转子' in name:
        return '精密转子组件，高耐磨性设计'
    elif '定子' in name:
        return '精密定子组件，优异密封性能'
    elif '柱塞泵' in name or '下泵体' in name:
        return '高压柱塞输送，稳定可靠工作'
    elif '控制器' in name:
        return '智能控制单元，精准参数调节'
    else:
        return '精密流体控制设备，稳定可靠'

def find_images_for_model(model):
    images = []
    for root, dirs, files in os.walk(IMAGE_DIR):
        for filename in files:
            if any(ext in filename.lower() for ext in ['.png', '.jpg', '.jpeg']):
                if model.lower() in filename.lower():
                    rel_path = os.path.relpath(os.path.join(root, filename), IMAGE_DIR)
                    images.append({
                        'filename': filename,
                        'path': rel_path,
                        'score': get_image_score(filename)
                    })
    images.sort(key=lambda x: x['score'], reverse=True)
    return images

def get_image_score(filename):
    score = 0
    if '尺寸图' not in filename:
        score += 5
    if '备用' not in filename:
        score += 3
    if '样品' not in filename:
        score += 3
    if '之前' not in filename:
        score += 2
    if '素材' not in filename:
        score += 2
    if '工程图' not in filename:
        score += 2
    if 'pdf' not in filename.lower():
        score += 1
    if '尺寸表' not in filename:
        score += 3
    return score

def is_english_folder(path):
    return '英文' in path

def get_category_from_path(path):
    parts = path.split(os.sep)
    for part in parts:
        if '产品-' in part:
            return part.replace('产品-', '')
    return '其他产品'

def main():
    products = {}
    for root, dirs, files in os.walk(WORD_DIR):
        if is_english_folder(root):
            continue
        for filename in files:
            if filename.startswith('~$'):
                continue
            if not (filename.endswith('.doc') or filename.endswith('.docx')):
                continue
            filepath = os.path.join(root, filename)
            model = extract_model_from_filename(filename)
            
            if not model:
                continue
            
            if model in products:
                continue
            
            name = extract_name_from_filename(filename)
            description = generate_description(name)
            category = get_category_from_path(root)
            
            products[model] = {
                'model': model,
                'name': name,
                'description': description,
                'category': category,
                'images': find_images_for_model(model)
            }
    
    sorted_products = sorted(products.values(), key=lambda x: x['model'])
    
    print("=" * 140)
    print(f"{'产品型号':<20} | {'中文名称':<28} | {'简短描述':<28} | {'分类':<20} | {'匹配图片'}")
    print("=" * 140)
    
    for p in sorted_products:
        image_info = p['images'][0]['filename'] if p['images'] else "无匹配图片"
        print(f"{p['model']:<20} | {p['name']:<28} | {p['description']:<28} | {p['category']:<20} | {image_info}")
    
    print("\n\n产品总数:", len(sorted_products))
    
    with open('products_data.txt', 'w', encoding='utf-8') as f:
        f.write("=" * 140 + "\n")
        f.write(f"{'产品型号':<20} | {'中文名称':<28} | {'简短描述':<28} | {'分类':<20} | {'匹配图片'}\n")
        f.write("=" * 140 + "\n")
        for p in sorted_products:
            image_info = p['images'][0]['filename'] if p['images'] else "无匹配图片"
            f.write(f"{p['model']:<20} | {p['name']:<28} | {p['description']:<28} | {p['category']:<20} | {image_info}\n")
        
        f.write(f"\n\n产品总数: {len(sorted_products)}\n")
        f.write("\n--- 分类统计 ---\n")
        categories = {}
        for p in sorted_products:
            cat = p['category']
            categories[cat] = categories.get(cat, 0) + 1
        for cat, count in sorted(categories.items()):
            f.write(f"{cat}: {count}个产品\n")
        
        f.write("\n--- 详细图片路径 ---\n")
        for p in sorted_products:
            if p['images']:
                f.write(f"\n{p['model']} - {p['name']}:\n")
                for img in p['images'][:3]:
                    f.write(f"  - {img['filename']} (路径: {img['path']})\n")
    
    print("\n数据已保存到 products_data.txt")
    return sorted_products

if __name__ == '__main__':
    main()
