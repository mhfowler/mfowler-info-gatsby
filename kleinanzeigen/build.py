import os
import jinja2

PROJECT_PATH = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))

# input pages dir
PAGES_DIR = os.path.join(PROJECT_PATH, 'kleinanzeigen/templates/pages')

# output dirs
OUTPUT_DIR = os.path.join(PROJECT_PATH, 'static')
if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

# input inventory folder
INVENTORY_DIR = os.path.join(PROJECT_PATH, 'static/kleinanzeigen')


def load_inventory(inventory_dir):
    inventory = {}
    for dirpath, dirnames, filenames in os.walk(inventory_dir):
        dirpath_parts = dirpath.split('/')
        if 'sold' in dirpath_parts:
            continue
        for f_name in filenames:
            if dirpath != inventory_dir:
                continue
            if f_name in ['.DS_Store']:
                continue
            img_path = '/kleinanzeigen/{}'.format(f_name)
            inventory[f_name] = [img_path]
        for dirname in dirnames:
            if dirname == 'sold':
                continue
            if dirpath != inventory_dir:
                continue
            full_path = os.path.join(dirpath, dirname)
            img_paths = []
            for f_name in os.listdir(full_path):
                if f_name in ['.DS_Store']:
                    continue
                img_path = '/kleinanzeigen/{}/{}'.format(dirname, f_name)
                img_paths.append(img_path)
            inventory[dirname] = img_paths
    return inventory



def log_print(msg, debug):
    if debug:
        print(msg)


def build_site(pages_dir, output_dir, debug):

    # render html
    template_path = os.path.join(PROJECT_PATH, 'kleinanzeigen/templates')
    template_loader = jinja2.FileSystemLoader(searchpath=template_path)
    template_env = jinja2.Environment( loader=template_loader, extensions=['jinja2.ext.with_'])

    # load inventory
    inventory = load_inventory(INVENTORY_DIR)
    template_vars = {
        'inventory': inventory
    }

    for dirpath, _, files in os.walk(pages_dir):
        for page in files:
            relative_dirpath = os.path.relpath(dirpath, pages_dir)
            if relative_dirpath == '.':
                relative_dirpath = ''
            relative_path = os.path.join(relative_dirpath, page)
            template_path = 'pages/' + relative_path
            log_print('building: {}'.format(relative_path), debug=debug)
            page_template = template_env.get_template(template_path)
            page_text = page_template.render(template_vars)

            output_page_path = os.path.join(output_dir, relative_path)
            output_dirpath = os.path.dirname(output_page_path)
            if not os.path.exists(output_dirpath):
                os.makedirs(output_dirpath)
            with open(output_page_path, 'w') as output_file:
                page_text = str(page_text)
                output_file.write(page_text)


if __name__ == '__main__':

    # build dist
    build_site(pages_dir=PAGES_DIR, output_dir=OUTPUT_DIR, debug=True)
