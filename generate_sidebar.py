


def generate_sidebar_html(input_file, output_file):
    with open(input_file, 'r') as file:
        lines = file.readlines()

    html_lines = [
        '<!-- SIDEBAR -->',
        '<div id="sidebar">',
        '  <h3>Table of Contents</h3>',
        '  <!-- Sidebar nav list -->',
        '  <ul style="list-style-type:none; padding-left: 0;">'
    ]

    for line in lines:
        stripped = line.strip()
        if not stripped:
            continue  # Skip blank lines

        # Determine the heading level based on indentation
        indent_level = (len(line) - len(stripped)) // 4
        if indent_level < 0:
            indent_level = 0

        # Extract the text and format it for an anchor
        heading_text = stripped.split(maxsplit=1)[0]
        anchor_text = stripped.replace(" ", "-").replace("(", "").replace(")", "").replace(".", "-").lower()

        # Generate the HTML line
        html_lines.append(f'{" " * (2 * indent_level)}<li class="level-{indent_level + 1}"><a href="#{anchor_text}">{heading_text}</a></li>')

    html_lines.append('  </ul>')
    html_lines.append('</div>')

    # Write the HTML lines to the output file
    with open(output_file, 'w') as file:
        file.write('\n'.join(html_lines))

    print(f"HTML sidebar written to {output_file}")


# Input and output file paths
input_file = 'sidebar_headings.txt'  # Replace with your input file name
output_file = 'sidebar.html'         # Replace with your desired output file name

# Generate the HTML sidebar
generate_sidebar_html(input_file, output_file)



